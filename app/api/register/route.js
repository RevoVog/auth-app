import { connectMongoDB } from "@/lib/mongodb";
import User from "/models/User";  // Import the User model
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
    
        console.log("Name:", name);  
        console.log("Email:", email);
        console.log("Password:", password);
        
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Connect to MongoDB
        await connectMongoDB();

        // Create the user in the database
        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User Registered" }, { status: 200 });
        
    } catch (error) {
        console.error("Error in registration:", error);
        return NextResponse.json({ message: "Error in registration" }, { status: 500 });
    }
}
