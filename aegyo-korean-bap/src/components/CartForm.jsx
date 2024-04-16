import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CartCard from "./CartCard.jsx";
import "./cartform.css";
import {
  
  maindish,
  drinks,
  soupdish,
  starter,
  frieddishes,
} from "./product.js";

const CartForm = (props) => {
  const {  onAdd } = props;
  const [filter, setFilter] = useState("Fried Dishes");
  const [products, setProducts] = useState(frieddishes);

  useEffect(() => {
    if (filter === "Fried Dishes") {
      setProducts(frieddishes);
    }
    if (filter === "Starter") {
      setProducts(starter);
    }

    if (filter === "Main Dish") {
      setProducts(maindish);
    }

    if (filter === "Drinks") {
      setProducts(drinks);
    }

    if (filter === "Soup Dish") {
      setProducts(soupdish);
    }
  }, [filter]);

  

  

  return (
    

    <div >
      <Container id="cartmenu">
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">𝕆𝕣𝕕𝕖𝕣 ℍ𝕖𝕣𝕖</h3>
            <br></br>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter === "Starter" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Starter")}
            >
              Starters
            </button>
            <button
              className={`filter-btn ${
                filter === "Fried Dishes" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Fried Dishes")}
            >
              Fried Dishes
            </button>
            <button
              className={`filter-btn ${
                filter === "Main Dish" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Main Dish")}
            >
              Main Dish
            </button>
            <button
              className={`filter-btn ${
                filter === "Soup Dish" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Soup Dish")}
            >
              Soup Dish
            </button>
            <button
              className={`filter-btn ${
                filter === "Drinks" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Drinks")}
            >
              Drinks
            </button>
            
          </Col>
          <div className="menuitems">
          {products.map((item) => (
            <Row  key={item.id} className="mb-4">
              {" "}
              <CartCard item={item} onAdd={onAdd}/> 
            </Row>

          ))}
          </div>
        </Row>
      </Container>
      
    </div>
  );
};

export default CartForm;