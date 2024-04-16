import React from "react";
import { HashLink as NavLink } from 'react-router-hash-link';
import styled from "styled-components";
import main from "../image/main.jpg";


export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={main} alt="Background Image" />
      
      
        
          
        
        
        <div className="info">
          <h2><center>𝔸𝕖𝕘𝕪𝕠 𝕂𝕠𝕣𝕖𝕒𝕟 𝔹𝕒𝕡</center></h2>
          <em>
            Authentic Korean Cuisine <br></br>
            Resturant for Friends & family
          </em>
          <NavLink to="/cart"><button>ORDER NOW</button></NavLink>
        </div>
        </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
 
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        font-family:"Times New Roman",Times,serif;
        Font-style:oblique;
        
        text-align: end;
        font-size: 1.7rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      
      }
      .info {
        top: 25%;
        left: 20%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
          font-size: 1.1rem;
        }
      }
    }
  }
`;