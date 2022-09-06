// This is your test secret API key.
const stripe = require('stripe')('sk_test_51JWzadL5ZhOniaHMCdT5tS7vXLVLi5noRgDSdgxpdC2V7LX8uQHuq0xzduz2jDWpmF5RcyJh7GViQmxDT7IHYORZ00fSE5AyZV');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{price_1LcXPiL5ZhOniaHMeUqOGR6C}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242 - novi Server'));