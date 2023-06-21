import React from 'react'

function Football(props) {

    // const shoot=()=>{
    //     alert("Great shot " + props.name);
    // }
    //   return (
    //     <button onClick={shoot}>Take a shot!!</button>
    //   )

    const shoot1=(a)=>{
        alert(a);
    }

  return (
    <button onClick={()=>shoot1("GReat shotttttt!!!1")}>Take a shot!!</button>
  )
}

export default Football     