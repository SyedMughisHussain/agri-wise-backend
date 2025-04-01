import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
});

const Crop = mongoose.model("Crop", cropSchema);

export default Crop;
