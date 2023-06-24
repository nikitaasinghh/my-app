import logo from './logo.svg';
import './App.css';
import Vehicle from './Vehicle.js'
import Football from './Football.js'
import Result from './Result.js'
import Car from './Car.js'
import Home from './Home.js'
import About from './About.js'
import Layout from './Layout.js'
import UseReducer from './UseReducer.js'
import { Route, Routes } from "react-router-dom";
import { useReducer } from 'react';



function App() {

  {/* {
  cars.map((car)=> <Car key={car.id} brand={car.brand}></Car>)} */}
  return (
    <>
    <UseReducer></UseReducer>
    </>
  //   <div className="App">
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //     {/* <Vehicle></Vehicle>
  //     <Football name="Nikita"></Football>
  //     <Result isGoal="true"></Result> */}
  //     
  //   </div>
  );
}

export default App;
