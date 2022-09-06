import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51LbKBjHBrhfPNimKbICOD6arsEiKwNLyRsvzhEmigTZDkmTQIcQXTdmgZ7JJwXP3IGpZ6ZhvnIjwZQKLPbfXn51600KnpvuxYU"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer({cart}) {


    return (
       <Elements stripe={stripeTestPromise} cart={cart}>
          <PaymentForm cart={cart} />
          {cart.map((item) => (
             <div style={{fontSize:'44px'}} key={item.id}>${item.price}</div>
          ))}
       </Elements>
    );
}

export default StripeContainer;