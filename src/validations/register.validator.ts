import { body } from "express-validator";

export const validateUserRegister = [
  body("name")
    .exists()
    .withMessage("name is required")
    .isString()
    .withMessage("only string values are allowed"),
  body("email").exists().withMessage("email is required").isEmail(),
  body("password").exists().withMessage("password is required"),
];
