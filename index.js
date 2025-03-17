require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require('./src/routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

