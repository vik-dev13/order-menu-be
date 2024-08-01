import { body } from "express-validator";

export const validateUserLogin = [
  body("email")
    .exists()
    .withMessage("email is required")
    .isEmail()
    .withMessage("provide valid email"),
  body("password").exists().withMessage("password is required").isString(),
];
