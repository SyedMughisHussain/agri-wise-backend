import Crop from "../models/crop.model.js";

// Get all crops
export const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new crop
export const createCrop = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;

    if (!name || !imageUrl) {
      return res
        .status(400)
        .json({ message: "Name and imageUrl are required" });
    }

    const newCrop = await Crop.create({ name, imageUrl });

    res.status(201).json({
      newCrop,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
