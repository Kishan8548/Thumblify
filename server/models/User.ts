import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  freeGenerationsUsed: number;
  isPremium: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },

    // 🔒 LIMIT FIELD
    freeGenerationsUsed: {
      type: Number,
      default: 0,
    },

    // ⭐ FUTURE USE (paid plans)
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
