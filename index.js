import express from "express";
import connectDB from "./config/dbConnect.js";

import "dotenv/config";

import detectDiseaseRoutes from "./routes/detectDisease.routes.js";
import diseasePrecautionsRoutes from "./routes/diseasePrecautions.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
    error: false,
    data: null,
  });
});

app.use("/api/v1/image", detectDiseaseRoutes);
app.use("/api/v1/image", diseasePrecautionsRoutes);
app.use("/api/v1/user", userRoutes);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
