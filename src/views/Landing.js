import logo from '../42Recordings_Logo_Black+Transparent-01.png';
import Particles from '../components/Particles';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Landing() {
  return (
    <div className="App">
      <span className="App-header">
        <span className='Logo-container'>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/Roster">
        <button onClick={"sayHello"}>Enter</button>
        </Link>
        </span>
      </span>
      <Particles id="tsparticles" />
    </div>
  );
}

export default Landing;