import { useState, useEffect } from "react";
import "./register.css";
import FormInput from "./FormInput";
import Navbar from './Navbar';
import scrollreveal from "scrollreveal";
import { HashLink as NavLink } from 'react-router-hash-link';
import axios from "axios";
import { toast } from "react-toastify";

async function authenticateUser(email, password) {
  const response = await axios.get(`http://localhost:8000/api/register/${email}`);
  const res = response.data;
  if (res.message === "Email not found!") {
    // User does not exist
    toast.error("User not found!", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        padding:'20px',
        backgroundColor:'ghostwhite',
      },
      
      autoClose: 2000,
    });
  } else if (res) {
    // User exists then check for password
    if (password === res.data.password) {
      toast.success("Login Successful!", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          padding:'20px',
          backgroundColor:'ghostwhite',
        },
        autoClose: 1500,
        
      });

      localStorage.setItem('currentUser', JSON.stringify(res.data));

      setTimeout(()=>{
        window.location.href = "/profile";
      }, 2250);
    } else {
      toast.error("Invalid Credentials!", {
        position: toast.POSITION.TOP_CENTER,
        style: {
          padding:'20px',
          backgroundColor:'ghostwhite',
        },
        autoClose: 2000,
      });
    }
  }
}




const Login = () => {
  localStorage.removeItem("currentUser");
  const [cartItems, setCartItems] = useState([]);
    const [values, setValues] = useState({
      email: "",
      
      password: "",
      
    });
  
    const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        
        label: "Email",
        required: true,
      },
      
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      authenticateUser(values.email, values.password);
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
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
      <div className="login">
        <form id="form1"  onSubmit={handleSubmit}>
          <h1>𝕃𝕠𝕘𝕚𝕟</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button id="bt1">Login</button> 
          <h4 ><NavLink to="/register" id="lin">Are you new here ?</NavLink></h4>
        </form> 
      </div>
      </>
    );
  };
  
  export default Login;
