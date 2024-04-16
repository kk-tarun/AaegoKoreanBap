import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import useList from "./useList";
import "./review.css";
export default function App() {
  const { list, push } = useList("");
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/review",list)
      .then((res) => {
        // console.log(res.data);
        // setList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [list]);

  const errorr = () => {
    document.getElementById("errorOccured").innerHTML =
      "Please type something to add!";
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (review.length > 0) {
      push({review,name});
      
      setReview("");
      setName("");
      document.getElementById("errorOccured").innerHTML = "";
    } else errorr();
  };
  return (
    <div className="rev">
      <h2>ℝ𝕖𝕧𝕚𝕖𝕨</h2>
      
      <div className="center">
        <div className="inputfield">
          
          <form
            onSubmit={(event) => {
              onSubmit(event);
            }}
          >
            <textarea
              type="text"
              value={review}
              placeholder="review"
              cols={40}
              row={4}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
            <br/>
            <input 
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            /><br></br>
            <button class="submitbtn" type="submit">
              Submit
            </button>
          </form>
          <span id="errorOccured"></span>
        </div>
        <hr></hr>
        <div >
          {list.map((listitem, listindex) => {
            return (
              <div className="result" >
                <h4  key={listindex}>
                   {listitem.review}
                </h4>
                <h5 style={{marginTop:"20px"}}>  ~ {listitem.name}</h5>

                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
