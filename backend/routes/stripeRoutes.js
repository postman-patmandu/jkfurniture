import express from "express";
import Stripe from "stripe";
import { protect } from '../middleware/authMiddleware.js';

import { createStripeSession, orderSuccess } from "../controllers/stripeController.js";

const stripe = new Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.route('/create-checkout-session').post(protect, createStripeSession);
router.route('/order-success').get(protect, orderSuccess);
// router.route('/create-payment-intent').post(protect, createStripeSession);

// router.post('/create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'T-shirt',
//             },
//             unit_amount: 2000,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: 'http://localhost:3000/success',
//       cancel_url: 'http://localhost:3000/cancel',
//     });
  
//     res.send({ url: session.url });

//   });

// router.post('/create-checkout-session', async (req, res) => {
  // const { products } = req.body;

  // const lineItems = products.map((product) => ({
  //   price_data:{
  //     currency: "nzd",
  //     product_data:{
  //       name: product.name,
  //       images: [product.image]
  //     },
  //     unit_amount: Math.round(product.price*100),
  //   },
  //   quantity:product.qty
  // }));

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types:["card"],
  //   line_items: lineItems,
  //   mode: "payment",
  //   success_url: "http://localhost:3000",
  //   cancel: "http://localhost:3000"
  // });

  // res.json({id:session.id});
  // res.send("McFyFyn");

// });

  export default router;