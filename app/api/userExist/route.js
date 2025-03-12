import { connectMongoDB } from "@/lib/mongodb";
import User from "/models/User";  // Import the User model
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    await User.findOne({ email }.select("_id"));
    console.log("User exists");
    return NextResponse.json({ message: "User exists" }, { status: 200 });
  } catch (error) {
    console.error("Error in checking user:", error);
    return NextResponse.json(
      { message: "Error in checking user" },
      { status: 500 }
    );
  }
}
