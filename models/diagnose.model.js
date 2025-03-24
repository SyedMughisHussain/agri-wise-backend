import mongoose from "mongoose";

const DiagnoseSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    diseaseName: {
      type: String,
      required: true,
    },
    symptoms: {
      type: String,
      required: true,
    },
    prevention: {
      type: String,
      required: true,
    },
    suitableSolutions: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Diagnose = mongoose.model("Diagnose", DiagnoseSchema);

export default Diagnose;
