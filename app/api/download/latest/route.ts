import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME;
const FILE_KEY = "stretch-remindly-latest.dmg";
const EXPIRATION_TIME_SECONDS = 300;

export async function GET() {
  if (!BUCKET_NAME) {
    console.error("S3 bucket name environment variable not set.");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }
  if (
    !process.env.S3_BUCKET_REGION ||
    !process.env.S3_ACCESS_KEY ||
    !process.env.S3_SECRET_KEY
  ) {
    console.error("AWS credentials or region environment variables not set.");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }

  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: FILE_KEY,
  });

  try {
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: EXPIRATION_TIME_SECONDS,
    });

    return NextResponse.json({ downloadUrl: signedUrl });
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return NextResponse.json(
      { error: "Failed to generate download link." },
      { status: 500 },
    );
  }
}
