import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import ProductCard from "./ProductCard";
import {
  
  maindish,
  drinks,
  soupdish,
  starter,
  frieddishes,
} from "./product.js";
import "./menu-pack.css";

const MenuPack = () => {
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
    <section>
      <Container id="menu">
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">𝕄𝕖𝕟𝕦</h3>
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

          {products.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {" "}
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;