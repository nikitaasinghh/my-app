import React, { useState,createContext } from 'react'
import Login from './Login';
import User from './User';


//instead of passing props, we can use useContext which stores all the states and all the child components can access the states 
// function UseContext() {
//     const [username,setUsername]=useState("");
//   return (
//     <>
//         <Login setUsername={setUsername}/> <User username={username}/>
//     </>
//   )
// }

// export default UseContext

export const AppContext=createContext(null);

function UseContext() {
    const [username,setUsername]=useState("");
  return (
    <AppContext.Provider value={{username,setUsername}}>
        <Login /> <User />
    </AppContext.Provider>
  )
}

export default UseContext