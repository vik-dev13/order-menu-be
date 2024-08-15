import { NextFunction, Response } from "express";
import { ICreateShopReq, RequestBody } from "../../interface/request";

import Shop from "../../model/Shop.model";

export const updateShop = async (
  req: RequestBody<any>,
  res: Response,
  next: NextFunction
) => {
  const { shopId } = req.query;
  const { updateFields } = req.body;
  try {
    const shop = await Shop.findOne({ _id: shopId });

    if (!shop)
      return res.status(401).json({
        message: "Shop does not exist.",
      });

    const updatedShop = await Shop.findByIdAndUpdate(shopId, updateFields, {
      new: true,
    });
    await updatedShop.save();
    return res.status(200).json({
      message: "Update Successful",
      data: updatedShop,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server error.",
    });
  }
};
