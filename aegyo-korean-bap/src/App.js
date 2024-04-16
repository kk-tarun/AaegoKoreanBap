import React, { useEffect,useState } from "react";
import Footer from './components/Footer'
import {BrowserRouter, Route, Router, Link, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar';
import scrollreveal from "scrollreveal";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MenuPack from "./components/MenuPack";
import CartForm from "./components/CartForm";
import Basket from "./components/Basket";
import Review from "./components/Review";
import First from "./components/First";
import Second from "./components/Second";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


export default function App() {
  
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
        `,
          {
            opacity: 0,
            interval: 200,
          }
        );
      }, []);
  return (    
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<First/>}/>
      <Route path="/cart" element={<Second/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}