// import logo from '../42Recordings_Logo_Black+Transparent-01.png';
import Navbar from "../components/NavBar";
import React from "react";
import Particles from '../components/Particles';
import logo from '../42Recordings_Logo_Black+Transparent-01.png';
import '../views/AboutUs.css'


function AboutUs() {
  let text = "Forty Two Recordings is the brainchild of artist agent and manager Noah Schreibman located in Tallahassee, FL. The agency represents his strive to assist talented up-and-coming artists achieve all of their goals within the electronic music scene. As the Forty Two artist roster continues to grow, the team will also continue to grow with new agents and managers joining the team to help assist more and more incredible producers & artists. Be on the lookout for Forty Two artists on a lineup near you, their performances are truly not ones to miss! As Forty Two Recordings continues to grow and expand around the nation (and one day the world) our team cannot wait to watch all of our artists and collaborators grow and spread art to audiences everywhere!"
  return (
    <div className="Home">
      <Navbar />
      <div className="text-box">
        <div className="text">
          <h1>About Us</h1>
        {text}
        </div>
      </div>
      <Particles id="tsparticles" />
    </div>
  );
}

export default AboutUs;