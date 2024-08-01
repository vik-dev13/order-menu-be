import { NextFunction, Request, Response } from "express";
import User from "../../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ILoginReq, RequestBody } from "../../interface/request";
import { validationResult } from "express-validator";

export const loginUser = async (
  req: RequestBody<ILoginReq>,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()[0].msg,
    });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // Compare passwords
    const passwordMatch = await bcrypt.compare(
      password,
      user.password as string
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // Generate JWT token
    const token = jwt.sign({ email }, "secret");
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
