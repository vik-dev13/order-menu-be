import express from "express";
import { registerUser } from "../../controller/auth/register.controller";
import { validateUserRegister } from "../../validations/register.validator";

const router = express.Router();

router.post("/register", validateUserRegister, registerUser);

export default router;
