import { useState, useEffect } from "react";
import "./register.css";
import FormInput from "./FormInput";
import Navbar from './Navbar';
import scrollreveal from "scrollreveal";
import { HashLink as NavLink } from 'react-router-hash-link';
import { toast } from "react-toastify";
import axios from 'axios';

async function checkRegister(username, email,number,address,password) {
  console.log(username, email,number,address,password);
  const response = await axios.get(`http://localhost:8000/api/register/${email}`);
  const res = response.data;
  console.log(res);
  if (res.message === "Email not found!") {
    // if user doesn't exists then create a user and send data to server
    const user = {
      username: username,
      email: email,
      number: number,
      address: address,
      password: password,
      orders: [],
    };

    axios.post("http://localhost:8000/api/register/", user).catch((err) => {
      console.log(err.message);
    });

    toast.success("Registration Successfull!", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        padding:'20px',
        backgroundColor:'ghostwhite',
      },
      autoClose: 1500,
    });

    setTimeout(() => {
      window.location.href = "/login";
    }, 2250);
  } else if (res) {
    // if email already exists then show
    toast.error("Account already exists!", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        padding:'20px',
        backgroundColor:'ghostwhite',
      },
      autoClose: 1500,
    });
  }
}




const Register = () => {
  const [cartItems, setCartItems] = useState([]);
    const [values, setValues] = useState({
      username: "",
      email: "",
      number: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
    

    
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
  
    const inputs = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "number",
        type: "number",
        placeholder: "Number",
        errorMessage: "It should be a valid Number!",
        label: "Number",
        required: true,
      },
      {
        id: 4,
        name: "address",
        type: "textarea",
        
        placeholder: "Address",
        errorMessage:
          "Add address for deliver",
        label: "Addresss",
        
        required: true,
      },
      {
        id: 5,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 6,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        label: "Confirm Password",
        pattern: values.password,
        required: true,
      },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      checkRegister(
        values.username,
        values.email,
        values.number,
        values.address,
        values.password
  
      );
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    return (
      <>
      <Navbar countCartItems={cartItems.length}/>
      <div className="register">
        <form id="form2" onSubmit={handleSubmit}>
          <h1>ℝ𝕖𝕘𝕚𝕤𝕥𝕖𝕣</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button type='submit' id="bt1">Register</button>
          <h4 ><NavLink to="/login" id="lin">Already a User ?</NavLink></h4>
          
        </form>
      </div>
      </>
    );
  };
  
  export default Register;
