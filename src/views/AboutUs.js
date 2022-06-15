// import logo from '../42Recordings_Logo_Black+Transparent-01.png';
import Navbar from "../components/NavBar";
import React from "react";
import Particles from '../components/Particles';
import logo from '../42Recordings_Logo_Black+Transparent-01.png';
import '../views/AboutUs.css'


function AboutUs() {
  let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <div className="Home">
      <Navbar />
      <div className="text-box">
        <div className="text">
        {text}
        Text
        </div>
      </div>
      <Particles id="tsparticles" />
    </div>
  );
}

export default AboutUs;