import express from "express";
import { loginUser } from "../../controller/auth/login.controller";
import { validateUserLogin } from "../../validations/login.validator";

const router = express.Router();

router.post("/login", validateUserLogin, loginUser);

export default router;
