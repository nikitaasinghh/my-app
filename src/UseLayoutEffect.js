import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffect() {
    useLayoutEffect(()=>{

    },[]);

    useEffect(()=>{
        console.log("UseEffect")
    })
  return (
    <div>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect