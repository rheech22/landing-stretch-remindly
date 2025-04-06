import { db } from "@/app/adapters/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 },
      );
    }

    const { error } = await db
      .from("newsletter-subscriptions")
      .insert([{ email: email }]);

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        { message: "Subscription failed. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 201 },
    );
  } catch (error: any) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON in request body" },
        { status: 400 },
      );
    }
    console.error("API route error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 },
    );
  }
}
