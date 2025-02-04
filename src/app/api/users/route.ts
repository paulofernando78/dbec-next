import { NextResponse } from "next/server";
import supabase from "@/utils/supabaseClient";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Check if user exists and if password matches
  const { data, error } = await supabase
    .from("users") // Table name
    .select("username, password")
    .eq("username", username).single();

  if (error || !data || data.password !== password) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  return NextResponse.json({ message: "User have been created successfully" });
}
