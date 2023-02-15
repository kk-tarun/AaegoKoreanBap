import { useState } from "react";

const useList =()=>  {
    const [list, setList] = useState(["awesome restuarant","the service is very good"]);

    const push=(value)=>{
        const newList = [...list, value];
        setList(newList);

    }
     
    const pull=(index)=>{
    const newList=list.filter((listitem,listindex)=>{
        return listindex!==index;
        
    })
    setList(newList);
    }
return {
    list: list,
    push: push,
    pull: pull
    
}

}
export default useList;