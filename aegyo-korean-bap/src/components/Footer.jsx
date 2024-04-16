import React from "react";
import styled from "styled-components";
import logo2 from "../image/logo2.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo2} alt="" />
          <p>
            Aegyo Korean Bap <br></br>
            Korean Cuisine Resturant
          </p>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3><b>About Us</b></h3>
          </div>
          <p>
           Aegyo Korean Bap is a korean cuisine resturant stabalished in 2023, it provides one of the finest dining experince of korean culture and food here in punjab .We also do Delivery. 
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3><b>Contact Us</b></h3>
          </div>
          <p>+91 9648936455</p>
          <p>aegyokoreanbap@gmail.com</p>
          <p>@aegyokoreanbap</p>
          <p>Food court , Beside BH1, Lovely Professional university,
            jalandhar , punjab, India</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2023 <span>Aegyo Korean Bap</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;
  padding: 2vw;
  p {
    color:#FFFFE0 ;
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h3 {
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    
    
    .container {
      h3{
        font-size: 2rem;
      }
      img {
        height: 4rem;
        width: 10rem;
      }
      p{
        font-size:1rem;
      }
      svg {
        
        font-size: 1rem;
      
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  width: 100%;
  height: 50px;
  // position: fixed;
  display: flex;
  justify-content: center;
  align-items: center; 
  bottom: 0;
  background-color: black;
  color: white;
  
  h2 {
    font-size:24px;
    margin-top:50px;
    display:flex;
    justify-content:space-evenly;
    text-align: center;
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    margin:0;
    h2 {
      
      font-size:0.8rem;
      span {
        display: block;
      }
    }
  }
`;