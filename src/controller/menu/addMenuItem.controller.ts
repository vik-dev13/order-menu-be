import { Response } from "express";
import { RequestBody } from "../../interface/request";
import Shop from "../../model/Shop.model";
import MenuItem from "../../model/MenuItem.model";
import { IShop } from "../../interface/models";
import mongoose from "mongoose";

export const addMenuItem = async (req: RequestBody<any>, res: Response) => {
  try {
    const { shopId, name, description, price, rating, isVeg, isBestSeller } =
      req.body;
    const shop = await Shop.findById({ _id: shopId });
    if (!shop) return res.status(401).json({ message: "Shop does not exist." });

    const item = new MenuItem({
      shopId,
      name,
      description,
      price,
      rating,
      isVeg,
      isBestSeller,
    });
    const createdItem = await item.save();
    await Shop.updateOne(
      { _id: shopId },
      { $push: { menu: createdItem?._id } }
    );
    await shop.save();
    return res.status(200).json({ message: "Item added to menu" });
  } catch (err) {
    console.log("menu item creation error----", err);
    return res.status(500).json({
      message: "Internal server error..",
    });
  }
};
