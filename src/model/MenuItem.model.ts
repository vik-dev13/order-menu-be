import mongoose, { Schema } from "mongoose";
import { IMenuItem } from "../interface/models/index";

const menuItemsSchema: Schema = new mongoose.Schema<IMenuItem>({
  name: String,
  description: String,
  images: [String],
  isVeg: Boolean,
  price: Number,
  isBestSeller: Boolean,
  createdDate: Date,
  rating: Number,
});

const MenuItem = mongoose.model("MenuItem", menuItemsSchema);

export default MenuItem;
