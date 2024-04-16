import React,{useEffect,useState,createContext, } from 'react';
import Navbar from './Navbar';
import scrollreveal from "scrollreveal";
import CartForm from "./CartForm";
import Basket from "./Basket";
// import First from "./First"
export const CountContext= createContext();
export default function Second() {
  
  
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #slide,
        
        #menu,
        #cartmenu,
        #checkout1,
        .login,
        .register,
        .rev,
        .footer
        
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  
  
  return (
    <>
    
    <Navbar countCartItems={cartItems.length}/>
    <CartForm  onAdd={onAdd}/>
    <Basket cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}/>
    {/* <CountContext.Provider value={cartItems}><First/></CountContext.Provider> */}
    <footer/>
    </>
  )
}

