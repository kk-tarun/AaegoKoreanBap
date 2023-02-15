import React from "react";
import "./cartcard.css";

const CartCard = (props) => {
    const { item, onAdd } = props
  const { title, price } = props.item;
  

  return (
    <div className="single_product">
      <div className="sprite">
      <h5>{title} : </h5> 
      <span className="price">₹{price}</span>
      </div>
     
      
      <button id="cart" onClick={() => onAdd(item)}><i class="ri-add-circle-fill"></i></button>
      
        
    </div>
  );
};

export default CartCard;
