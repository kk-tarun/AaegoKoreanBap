import { useState,useEffect } from "react";
import axios from 'axios';
const useList =()=>  {
    const [list, setList] = useState([]);
       useEffect(() => {
        axios
          .get("http://localhost:8000/api/review")
          .then((res) => {
            // console.log(res.data);
            setList(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

    

    const push=(value)=>{
        const newList = [...list, value];
        setList(newList);

    }
     
    
return {
    list: list,
    push: push,
    
    
}

}
export default useList;