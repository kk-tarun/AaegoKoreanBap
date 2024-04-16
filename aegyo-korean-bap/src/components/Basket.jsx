import React, { useState,useEffect } from 'react';
import "./basket.css";
import axios from'axios';
import { toast } from "react-toastify";
async function cart( totalPrice, cartItems) {
  var localData = JSON.parse(localStorage.getItem('currentUser'));
  
  // console.log(cartItems);
  
  var detail = [];
  cartItems.forEach(element => {
    // console.log(element);
    detail.push({product:element.title, quantity:element.qty});
  });
  var some = {
    detail:detail,
    price: totalPrice
  };
  
  
  var email=localData.email;
    
    console.log(email);
    var user1 = await axios.get(`http://localhost:8000/api/register/${email}`);
    var user2= { ...user1.data.data,orders : [...user1.data.data.orders, some]}; 
    console.log(user2)
    axios.put(`http://localhost:8000/api/register/${email}`, user2).catch((err) => {
      console.log(err.message);
    });

      
  }


export default function Basket(props) {
  const [user, setUser]= useState(null);
  useEffect(() => {
    var localData = JSON.parse(localStorage.getItem('currentUser'));
    setUser(localData);
}, []);
  const order =()=>{
    if(user==null){
      toast.error("Login First!", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          padding:'20px',
          backgroundColor:'ghostwhite',
        },
        
        autoClose: 3500,
      });
    } else {
      cart(totalPrice, cartItems);
      toast.success("Order Placed!", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          padding:'20px',
          backgroundColor:'ghostwhite',
        },
        
        autoClose: 3500,
      });
    }
  }
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside id='checkout1' className="tx" >
      <h1 id='nam'>Cart Items</h1>
      <br>
      </br>
      <div >
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div CartCard item={item.id}className="items">
            <div >{item.title}</div>
            <div className='price'>
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
            <div>
            <button className="basket"  onClick={() => onAdd(item)} >
              <i class="ri-add-circle-fill"></i>
              </button>
              <button className="basket" onClick={() => onRemove(item)} >
              <i class="ri-close-circle-fill"></i>
              </button>{' '}
            </div>

            
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
                <div className="col-2">
                <div>Items Price</div>
                <div>₹{itemsPrice.toFixed(2)}</div>
                </div>
                <div className="col-2">
                <div>Tax Price</div>
                <div>₹{taxPrice.toFixed(2)}</div>
                </div>
                <div className="col-2">
                <div>Shipping Price</div>
                <div>₹{shippingPrice.toFixed(2)}</div>
                </div>
                <div className="col-2">
                    <strong>Total Price</strong>
                    <strong>₹{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button id="checkout" onClick={order}>
                Checkout
              </button>
            </div>
           
           
          </>
        )}
      </div>
    </aside>
  );
}