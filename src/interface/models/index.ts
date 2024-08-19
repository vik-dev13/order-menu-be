import mongoose, { Schema, Document } from "mongoose";

// Define the ObjectId type
const ObjectId = mongoose.Schema.Types.ObjectId;

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  shop?: mongoose.Types.ObjectId;
}

export interface IAddress {
  full_address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

export interface IMenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  images?: string[];
  rating?: string;
  createdDate: Date;
  isVeg: boolean;
  isBestSeller?: boolean;
}

export interface IShop {
  _id: string;
  name: string;
  created_date: Date;
  address: IAddress;
  admin: mongoose.Types.ObjectId;
  workers: [mongoose.Types.ObjectId];
  last_modified: Date;
}
