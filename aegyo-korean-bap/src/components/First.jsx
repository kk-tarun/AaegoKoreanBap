import React, { useState,  useEffect, useContext }from 'react';
import scrollreveal from "scrollreveal";
import Hero from './Hero';
import MenuPack from './MenuPack';
import Navbar from './Navbar';
import Services from './Services';
import Review from "./Review";
import { CountContext } from "./Second"

export default function First() {
  const [cartItems, setCartItems] = useState([]);
  // const  cart  = useContext(CountContext);
  
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
    <Hero/>
    <Services/>
    <MenuPack/>
    <Review/>
    <footer/>
    
    </>
  )
}
