import React from "react";
import { useState } from "react";
import useList from "./useList";
import "./review.css";
export default function App() {
  const { list, push } = useList("");
  const [todo, setTodo] = useState("");

  const errorr = () => {
    document.getElementById("errorOccured").innerHTML =
      "Please type something to add!";
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.length > 0) {
      push(todo);
      setTodo("");
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
            <input 
              type="text"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
            <button class="submitbtn" type="submit">
              Submit
            </button>
          </form>
          <p id="errorOccured"></p>
        </div>
        <hr></hr>
        <div >
          {list.map((listitem, listindex) => {
            return (
              <div className="result">
                <h5 key={listindex}>
                   {listitem}
                </h5>

                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
