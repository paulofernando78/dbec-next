import { NextResponse } from "next/server";
import { Buffer } from 'buffer';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      console.error("ELEVENLABS_API_KEY is not configured");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const { text, voice } = await request.json();

    if (!text || !voice) {
      return NextResponse.json(
        { error: "Missing required fields: 'text' and 'voice'" },
        { status: 400 }
      );
    }

    // If everything is in place, we send a request to Elevenlabs API
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error Response:", errorData);
      const errorMessage =
        errorData.detail?.message || "Failed to generate speech";
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const audioBuffer = await response.arrayBuffer();

    // More explicit typing to help TypeScript understand
    const buffer = Buffer.from(audioBuffer);
    const audioBase64 = buffer.toString("base64");

    return NextResponse.json({ audio: audioBase64 });
  } catch (error: any) {
    console.log("Text-to-speech generation error:", error);
    const errorMessage =
      typeof error === "object" && error !== null
        ? JSON.stringify(error)
        : error.message || "Failed to generate speech";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
