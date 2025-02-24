import express from "express";

import { signupFarmer, signupVerify } from "../controllers/user.controllers.js";

const router = express.Router();

router.route("/signup").post(signupFarmer);
router.route("/signup/verify").post(signupVerify);

export default router;
