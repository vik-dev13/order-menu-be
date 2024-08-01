import express from "express";
import { registerUser } from "../../controller/auth/register.controller";

const router = express.Router();

router.post("/register", registerUser);

export default router;
