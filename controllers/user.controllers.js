import Farmer from "../models/user.model.js";

import jwt from "jsonwebtoken";

export const signupFarmer = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    const existingFarmer = await Farmer.findOne({ phoneNumber });

    if (existingFarmer) {
      const token = jwt.sign(
        { id: existingFarmer._id },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "7d",
        }
      );

      const response = await fetch(
        "https://sendpk.com/api/sms.php?api_key=923193039832-f1d342a4-d03a-4e20-b309-b0cb3a131ea5&sender=BrandName&mobile=923193039832&message=TestSMS"
      );

      return res.status(200).json({
        message: "Farmer already exists",
        existingFarmer,
        token,
        response,
      });
    }

    const farmer = await Farmer.create({ phoneNumber });

    const token = jwt.sign({ id: farmer._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "Farmer registered successfully!",
      farmer,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
