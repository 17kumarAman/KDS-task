import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoutes from "./routes/product.js";

const app = express();
const PORT = 5000;
const LOCAL = "mongodb://localhost:27017/KDS";
const URI =
  "mongodb+srv://Aman:BhV3c3VN1N56nvqm@cluster0.mm1ukpv.mongodb.net/kds?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors());

// Route
app.use("/", ProductRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err));
