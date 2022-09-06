import React from "react";
import Amazon from "./amazon";



const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price: $ {price}</p>
        <button type="button" className="btn btn-primary" onClick={() => handleClick(item)} >Add To Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
