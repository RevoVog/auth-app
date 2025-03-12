import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true }); // Fix timeseries -> timestamps

const user = mongoose.models.user || mongoose.model("user", userSchema); // Fix models.user -> models.User
export default user;
