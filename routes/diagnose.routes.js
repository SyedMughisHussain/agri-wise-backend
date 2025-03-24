import express from "express";

import { upload } from "../middlewares/multer.js";

import { createDiagnose } from "../controllers/diagnose.controllers.js";

const router = express.Router();

router.route("/diagnose").post(upload.single("image"), createDiagnose);

export default router;
