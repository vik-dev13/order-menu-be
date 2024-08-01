import { NextFunction, Request, Response } from "express";
import User from "../../model/User";
import bcrypt from "bcrypt";
import { IRegisterReq, RequestBody } from "../../interface/request";

export const registerUser = async (
  req: RequestBody<IRegisterReq>,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return res.status(200).json({
        message: "User created.",
        user: {
          name,
          email,
        },
      });
    }
  } catch (err) {
    console.log("Something went wrong..");
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
