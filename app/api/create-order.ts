import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    try {
      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: "Error creating order" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
