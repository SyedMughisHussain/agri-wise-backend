import express from "express";
import connectDB from "./config/dbConnect.js";
import cors from "cors";

import "dotenv/config";
import userRoutes from "./routes/user.routes.js";
import diagnoseRoutes from "./routes/diagnose.routes.js";
import cropRoutes from "./routes/crop.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
    error: false,
    data: null,
  });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/upload", diagnoseRoutes);
app.use("/api/v1/crops", cropRoutes);

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
