import Farmer from "../models/user.model.js";

export const signupFarmer = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    const existingFarmer = await Farmer.findOne({ phoneNumber });
    if (existingFarmer) {
      return res.status(400).json({ message: "Farmer already registered" });
    }

    const newFarmer = await Farmer.create({
      phoneNumber,
    });

    res
      .status(201)
      .json({ message: "Farmer registered successfully", farmer: newFarmer });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
