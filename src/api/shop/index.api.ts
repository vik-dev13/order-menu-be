import { verify } from "crypto";
import express from "express";
import { verifyToken } from "../../middleware/verifyToken.middleware";
import { createShop } from "../../controller/shop/createShop.controller";

const router = express.Router();

router.post("/create", createShop);

export default router;
