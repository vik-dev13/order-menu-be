import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { SECRET_KEY } from "../constants";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY) as
      | string
      | JwtPayload;
    if (typeof decodedToken === "string")
      return res.status(401).json({
        error: "Not Authorized",
      });
    let userId = decodedToken?.id;
    if (!userId) {
      return res.status(401).json({
        error: "Not Authorized",
      });
    }
    next();
  } catch (err) {
    res.status(401).json({
      error: err,
    });
  }
};
