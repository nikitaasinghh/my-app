import React from 'react'
import { useReducer } from 'react';

const reducer=(state,action)=>{
  switch (action.type) {
    case "INCREMENT":
      return {count:state.count+1, showText:state.showText};

    case "toggleShowText":
      return {count:state.count,showText:!state.showText};
    default:
      return state
  }
}

function UseReducer() {
  const [state,dispatch]=useReducer(reducer,{count: 0, showText:true});

  {/* {
  cars.map((car)=> <Car key={car.id} brand={car.brand}></Car>)} */}
  return (
    <>
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{
        dispatch({type: "INCREMENT"});
        dispatch({type: "toggleShowText"});
      }}>Click here</button>
    </div>
    
    {state.showText && <h3>Text here</h3> }
    </>
  
  );
}

export default UseReducer;
