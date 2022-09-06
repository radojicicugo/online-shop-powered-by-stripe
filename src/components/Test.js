import React from 'react';
import aresImg from '../images/aresBack.jpg'
import './Test.css';


function Test(props) {


    return (
        <div>
            <h3>Moj product</h3>
            <div className="container">
             <div className="box">
              <img id="img" src={aresImg} alt="#"></img>
             </div>
            </div>
            <a href="https://buy.stripe.com/bIY16O3L6h2hcww4gg"><button>CHECKOUT</button></a>
        </div>
    );
}

export default Test;