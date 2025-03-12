import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

let isConnected = false; // Track connection state

export const connectMongoDB = async () => {
    if (isConnected) {
        console.log("Using existing MongoDB connection");
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error in connecting to MongoDB:", error);
    }
};
