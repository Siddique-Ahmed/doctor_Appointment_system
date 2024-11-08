import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  picture: String,
  role: { type: String, default: "user", enum: ["admin", "doctor", "user"] },
  extraInfo: {
    fees: Number,
    hospital: String,
    time: String,
    bio: String,
    specialization: String,
    gender: String,
  },
});

export const UserModel =
  mongoose.models.Users || mongoose.model("Users", UserSchema);
