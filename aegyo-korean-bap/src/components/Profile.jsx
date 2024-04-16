import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import  './profile.css';
import axios from'axios';
   

export default function Profile() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    number: "",
    address: "",
    password: "",
    orders:[{detail:[{product:"",quantity:""}],price:""}]
  });
  
  var localData = JSON.parse(localStorage.getItem('currentUser'));
  var email=localData.email; 
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/register/${email}`)
      .then((res) => {
        // console.log(res.data);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  var order1 = user.orders;
  var order = [...order1].reverse();
  var detail = user.orders.detail;
// var user1=user.user.data;
  return (
    <div>
      <Navbar countCartItems={cartItems.length}/>

      
      <div id="detail">Hello,
           <div><u>{localData.username}</u></div>
           <div>Phone Number: {localData.number}</div>
           <div>Address: {localData.address}</div>
           </div>
<br/>
      {/* <button onClick={()=>console.log({abc})}>check </button> */}
      {/* <button onClick={()=>console.log({user1})}>check </button> */}
      <h2>𝕆𝕣𝕕𝕖𝕣 ℍ𝕚𝕤𝕥𝕠𝕣𝕪</h2>
      <div id='orders'>
      
        {order.map((ord)=>(
          <div id='history' key={ord._id}>
          {ord.detail.map((item)=>(
            <div key={item._id}>
              <div>{item.quantity}x {item.product}</div>
            </div>
          ))}
          <div>------------X------------</div>
          <div>Total Price: {ord.price}</div>
          </div>
        ))}
     
      
      
      </div> 
      
      
    </div>
  )
}
