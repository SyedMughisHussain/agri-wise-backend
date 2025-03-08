import express from "express";

import {
  signupFarmer,
  getLoggedInUser,
  updateUser,
} from "../controllers/user.controllers.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/signup").post(signupFarmer);
router.route("/me").get(authMiddleware, getLoggedInUser);
router.route("/update").put(authMiddleware, updateUser);

export default router;
