import express from "express";

import { signupFarmer } from "../controllers/user.controllers.js";

const router = express.Router();

router.route("/signup").post(signupFarmer);

export default router;
