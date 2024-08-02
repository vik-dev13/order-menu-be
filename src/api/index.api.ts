import express from "express";
import login from "./auth/login.api";
import register from "./auth/register.api";
import shopRouter from "./shop/index.api";
import { verifyToken } from "../middleware/verifyToken.middleware";
const router = express.Router();

const app = express();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the dark side.",
  });
});

router.post("/login", login);
router.post("/register", register);
router.use("/shop", verifyToken, shopRouter);

export default router;
