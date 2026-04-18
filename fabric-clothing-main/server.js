const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Order Schema & Model
const orderSchema = new mongoose.Schema(
  {
    orderId: { type: String, required: true },
    receipt: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    status: { type: String, default: "created" },
    items: [{ name: String, quantity: Number }], // example structure
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

// ✅ Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create Order API (Razorpay + MongoDB save)
app.post("/create-order", async (req, res) => {
  try {
    const { amount, items } = req.body; // 👈 receive cart items from frontend
    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    // Create order in Razorpay
    const order = await razorpay.orders.create(options);

    // Save order in MongoDB
    const newOrder = new Order({
      orderId: order.id,
      receipt: order.receipt,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      items: items || [],
    });

    await newOrder.save();

    res.json(order);
  } catch (err) {
    console.error("❌ Error creating order:", err);
    res.status(500).send({ error: "Failed to create order" });
  }
});

// ✅ Fetch Recent Orders API
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(10);
    res.json(orders);
  } catch (err) {
    console.error("❌ Error fetching orders:", err);
    res.status(500).send({ error: "Failed to fetch orders" });
  }
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
