import mongoose, { Schema } from "mongoose";
import { IUser } from "../interface/models";

const userSchema: Schema = new mongoose.Schema<IUser>({
  name: String,
  email: String,
  password: String,
  shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
});

const User = mongoose.model("User", userSchema);

export default User;
