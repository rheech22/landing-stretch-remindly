import { z } from "zod";

const EmailSchema = z.string().email({ message: "Invalid email address" });

export const newsletter = {
  subscribe: async (
    email: string,
  ): Promise<{ error: boolean; message?: string }> => {
    const validationResult = EmailSchema.safeParse(email);

    if (!validationResult.success) {
      const errorMessage =
        validationResult.error.errors[0]?.message ||
        "Please enter a valid email address.";
      console.error("Client-side validation failed:", errorMessage);

      return { error: true, message: errorMessage };
    }

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email: validationResult.data }),
      });

      if (!response.ok) {
        let errorMessage = `Subscription failed (status: ${response.status})`;
        try {
          const errorData = await response.json();

          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          console.error("Failed to parse error response JSON:", jsonError);
        }
        console.error("Failed to subscribe:", errorMessage);
        return { error: true, message: errorMessage };
      }

      return { error: false };
    } catch (error) {
      console.error("Error calling subscribe API:", error);

      return { error: true, message: "Network error. Please try again." };
    }
  },
};
