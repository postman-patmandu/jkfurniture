import Order from "../models/orderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Stripe from "stripe";

import dotenv from "dotenv";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

const createStripeSession = asyncHandler(async (req, res) => {
  const { products, order } = req.body;

  console.log('Order Details: ', order);

  const line_items = products.map((product) => ({
      price_data:{
        currency: "nzd",
        product_data:{
          name: product.name,
          // images: [`http://localhost:3000${product.image}`]
        },
        unit_amount: Math.round(product.price*100),
      },
      quantity:product.qty
    }));

    // const shippingRate = await stripe.shippingRates.create({
    //   display_name: 'Ground shipping',
    //   type: 'fixed_amount',
    //   fixed_amount: {
    //     amount: 500,
    //     currency: 'nzd',
    //   },
    //   delivery_estimate: {
    //     minimum: {
    //       unit: 'business_day',
    //       value: 5,
    //     },
    //     maximum: {
    //       unit: 'business_day',
    //       value: 7,
    //     },
    //   },
    // });

  const session = await stripe.checkout.sessions.create({
    // payment_method_types:["card"],
    payment_method_types: ['card', 'afterpay_clearpay'],
    // shipping_options: [
    //   {
    //     shipping_rate_data: {
    //       type: 'fixed_amount',
    //       fixed_amount: {
    //         amount: 0,
    //         currency: 'nzd',
    //       },
    //       display_name: 'Free shipping',
    //       delivery_estimate: {
    //         minimum: {
    //           unit: 'business_day',
    //           value: 5,
    //         },
    //         maximum: {
    //           unit: 'business_day',
    //           value: 7,
    //         },
    //       },
    //     },
    //   },
    //   {
    //     shipping_rate_data: {
    //       type: 'fixed_amount',
    //       fixed_amount: {
    //         amount: 1500,
    //         currency: 'nzd',
    //       },
    //       display_name: 'Next day air',
    //       delivery_estimate: {
    //         minimum: {
    //           unit: 'business_day',
    //           value: 1,
    //         },
    //         maximum: {
    //           unit: 'business_day',
    //           value: 1,
    //         },
    //       },
    //     },
    //   },
    // ],
    line_items: line_items,
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ['NZ'],
    },
    // payment_intent_data: {
    //     shipping: {
    //       name: order.user.name,
    //       address: {
    //         line1: order.shippingAddress.address,
    //         city: order.shippingAddress.city,
    //         state: 'NZ',
    //         country: 'NZ',
    //         postal_code: order.shippingAddress.postCode,
    //      },
    //     },
    //   },
    success_url: "https://www.furnitureshop.nz/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "https://www.furnitureshop.nz"
  });

  res.json({id:session.id});
});

const orderSuccess = asyncHandler(async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  // const customer = await stripe.customers.retrieve(session.customer);

  res.json({session});
});

export { createStripeSession, orderSuccess };