import { NextFunction, Response } from "express";
import { ICreateShopReq, RequestBody } from "../../interface/request";
import Shop from "../../model/Shop.model";
import User from "../../model/User";

export const createShop = async (
  req: RequestBody<ICreateShopReq>,
  res: Response,
  next: NextFunction
) => {
  const { adminId, name, address } = req.body;
  try {
    const user = await User.findOne({ _id: adminId });
    const newShop = new Shop({
      name,
      address,
      admin: adminId,
    });
    const createdShop = await newShop.save();
    const shopId = createdShop?._id;
    user.shop = shopId;
    await user.save();
    return res.status(200).json({
      message: "New shop created",
      data: createdShop,
    });
  } catch {
    return res.status(500).json({
      error: "Internal server error.",
    });
  }
};
