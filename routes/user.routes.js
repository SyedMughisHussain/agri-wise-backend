import express from "express";

import {
  signupFarmer,
  getLoggedInUser,
} from "../controllers/user.controllers.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/signup").post(signupFarmer);
router.route("/me").get(authMiddleware, getLoggedInUser);

export default router;
