import { useRef } from "react"
import React from 'react'

function UseRef() {
    const inputRef=useRef(null);

    const onClick=()=>{
        // console.log(inputRef.current.value);
        // inputRef.current.focus();
        inputRef.current.value="";
    }
  return (
    <>
        <input type="text" placeholder="ex..."  ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </>
  )
}

export default UseRef