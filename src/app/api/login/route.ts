import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseClient";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Check if user exists
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", username)
    .single();

  if (error || !user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // Check if user is approved
  if (!user.is_approved) {
    return NextResponse.json({ message: "User not approved" }, { status: 403 });
  }

  // Verify password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful" });
}