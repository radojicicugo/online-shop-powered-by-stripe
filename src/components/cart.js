import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import PaymentForm from "./PaymentForm";
import StripeContainer from "./StripeContainer";

const Cart = ({ cart, setCart, handleChange }) => {


  const [price, setPrice] = useState(0);
  const [showItem, setShowItem] = useState(false)

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

 
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button type="button" className="btn btn-dark" id="btn" onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button type="button" className="btn btn-dark" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span> $ {item.price}</span>
            <button type="button" className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

<div className="total">
        <span id="total-price">Total Price of your Cart</span>
      </div>
        <span id="total-price1" style={{fontSize:'30px'}}> $ {price}</span>
       
       
        <div className="row" id="button-pay">

            {showItem ? (
           <StripeContainer cart={cart} />
            ):(

              <button type="button" className="btn btn-light" onClick={()=> setShowItem(true)}  >
                  Checkout
              </button>
            )
          }
              <div>
           </div>
        </div>
        

    </article>
  );
};

export default Cart;
