require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require('./src/routes/productRoutes');
const customerRoutes = require('./src/routes/customerRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',(req, res, next)=>{
res.header('Access-Control-Allow-Origin',"*");
res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE,OPTIONS");
res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With, Content-Type, Accept");
next();
});

app.use('/api', productRoutes);
app.use('/api', customerRoutes);
app.use('/api', orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


const PORT = process.env.PORT || 2000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));

