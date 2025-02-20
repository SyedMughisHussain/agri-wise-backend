import mongoose from "mongoose";

const FarmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    location: {
      type: String,
    },
    preferredLanguage: {
      type: String,
      default: "English",
    },
  },
  { timestamps: true }
);

const Farmer = mongoose.model("Farmer", FarmerSchema);

export default Farmer;
