import React from 'react';
import "./basket.css";

export default function Basket(props) {
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
              <button id="checkout" onClick={() => alert('Order Confirmed')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}