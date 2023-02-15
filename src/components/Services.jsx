import React from "react";

import { Container } from "reactstrap";
import Slider from "react-slick";
import "./slider.css";

import { sliderData } from "./sliderData";



export default function Services() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
   <>
    
      <Container id = "slide">
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div className="slider__wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider__content w-50 ps-2">
                  <h2 id="tit"className="mb-3 ">{item.title}</h2>
                  <p id="desc">{item.desc}</p>
                  <button id="bt1" className="btn">Explore Food</button>
                </div>

                <div className="slider__img w-50">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
   
   </>
  );
};


