
 const express = require("express");
 const Stripe = require("stripe");

 require("dotenv").config();

 const stripe = Stripe(process.env.STRIPE_SECRET_TEST)

  
  app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: "",
      cancel_url: 'https://example.com/cancel',
    });
  
    res.redirect(303, session.url);
  });