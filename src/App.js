import logo from './42Recordings_Logo_Black+Transparent-01.png';
import testImage from './testimage.png';
import './App.css';
import Particles from './components/Particles';
import React from "react";
import Home from './views/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <span className="App-header">
        <span className='Logo-container'>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/Home">
        <button onClick={"sayHello"}>Enter</button>
        </Link>
        </span>
      </span>
      <Particles id="tsparticles" />
    </div>

    <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
