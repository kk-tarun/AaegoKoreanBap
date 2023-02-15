import React, { useEffect,useState } from "react";
import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import scrollreveal from "scrollreveal";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MenuPack from "./components/MenuPack";
import CartForm from "./components/CartForm";
import Basket from "./components/Basket";
import Review from "./components/Review";


export default function App() {
  
  
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
    <ScrollToTop/>
    <Navbar countCartItems={cartItems.length}/>
    <Hero/>
    <Services/>
    <MenuPack/>
    
    <CartForm  onAdd={onAdd}/>
    <Basket cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}/>
    <Review/>
    <Footer/>
    
    </>
  )
}


