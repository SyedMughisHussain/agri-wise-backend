import Diagnose from "../models/diagnose.model.js";

import { uploadToCloudinary } from "../utils/cloudinary.js";

export const createDiagnose = async (req, res) => {
  try {
    const { diseaseName, symptoms, prevention, suitableSolutions, createdBy } =
      req.body;

    const result = await uploadToCloudinary(req.file.path);

    const diagnose = await Diagnose.create({
      image: result.url,
      diseaseName,
      symptoms,
      prevention,
      suitableSolutions,
      createdBy,
    });

    res.status(201).json({
      message: "Diagnose created successfully!",
      success: true,
      diagnose,
    });

    console.log(result.url);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while creating diagnose",
      error: error.message,
    });
  }
};
