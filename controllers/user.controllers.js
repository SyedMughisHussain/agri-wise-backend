import Farmer from "../models/user.model.js";
import twilio from "twilio";

import jwt from "jsonwebtoken";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

let OTP;

export const signupFarmer = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    console.log(phoneNumber);

    const existingFarmer = await Farmer.findOne({ phoneNumber });
    if (existingFarmer) {
      return res.status(400).json({ message: "Farmer already registered" });
    }

    let digits = "0123456789";
    OTP = "";
    for (let i = 0; i < 6; i++) OTP += digits[Math.floor(Math.random() * 10)];

    // await client.messages.create({
    //   body: `Your OTP is ${OTP}. This code will be valid for 5 minutes.`,
    //   messagingServiceSid: "MG9d114be0344a422980000643421f3a68",
    //   to: `+923193039832`,
    // });

    const verification = await client.verify.v2
      .services("VA8bc2a56fc709a3e97b5d211507489905")
      .verifications.create({
        to: `+92${phoneNumber}`,
        channel: "sms",
      });

    res.status(201).json({
      message: "Otp Send..",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const signupVerify = async (req, res) => {
  try {
    console.log(req.body);

    const { phoneNumber, otp } = req.body;

    if (otp !== OTP) {
      return res.status(400).json({ message: "Incorrect Otp." });
    }

    const newFarmer = await Farmer.create({
      phoneNumber,
    });

    const token = jwt.sign({ id: newFarmer._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res
      .status(201)
      .json({ message: "OTP verified successfully", farmer: newFarmer, token });

    OTP = "";
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
