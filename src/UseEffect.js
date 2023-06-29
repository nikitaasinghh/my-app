import React,{useEffect, useState} from 'react'
import axios from "axios"

//"https://jsonplaceholder.typicode.com/comments"
function UseEffect() {
    const [datas,setData]=useState("");
    const [count,setCount]=useState(0);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
          // console.log(response.data);
          setData(response.data[0].email);
          console.log("API CALLED");
        },[]);
    })
  return (
    <>
      <div>UseEffect {datas}</div>
      <h1>{count}</h1>
      <div>
        <button onClick={()=>{
          setCount(count+1);
        }}>
          Click
        </button>
      </div>
    </>
  )
}

export default UseEffect