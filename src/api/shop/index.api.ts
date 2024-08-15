import { verify } from "crypto";
import express from "express";
import { verifyToken } from "../../middleware/verifyToken.middleware";
import { createShop } from "../../controller/shop/createShop.controller";
import { updateShop } from "../../controller/shop/updateShop.controller";

const router = express.Router();

router.post("/create", verifyToken, createShop);
router.patch("/update", verifyToken, updateShop);

export default router;
