import mongoose, { Schema } from "mongoose";
import { IShop } from "../interface/models";

const shopSchema: Schema = new mongoose.Schema<IShop>({
  name: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  address: {
    full_address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pinCode: {
      type: String,
    },
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  last_modified: {
    type: Date,
  },
});

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
