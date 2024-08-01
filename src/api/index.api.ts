import express from "express";
import login from "./auth/login.api";
import register from "./auth/register.api";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the dark side.",
  });
});

router.post("/login", login);
router.post("/register", register);

export default router;
