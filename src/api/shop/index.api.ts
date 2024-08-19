import { verify } from "crypto";
import express from "express";
import { verifyToken } from "../../middleware/verifyToken.middleware";
import { createShop } from "../../controller/shop/createShop.controller";
import { updateShop } from "../../controller/shop/updateShop.controller";
import { addMenuItem } from "../../controller/menu/addMenuItem.controller";

const router = express.Router();

router.post("/create", verifyToken, createShop);
router.patch("/update", verifyToken, updateShop);

// menu
// add menu items
// update menu item
// delete menu item
// fetch all items

router.post("/add-menu-item", verifyToken, addMenuItem);

export default router;
