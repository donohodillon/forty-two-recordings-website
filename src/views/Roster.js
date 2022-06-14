// import logo from '../42Recordings_Logo_Black+Transparent-01.png';
import Navbar from "../components/NavBar";
import React from "react";
import FortyTwoArtistCards from "../components/FortyTwoArtistCards";
import SoundzOrganicArtistCards from "../components/SoundzOrganicArtistCards";
import Particles from '../components/Particles';
import logo from '../42Recordings_Logo_Black+Transparent-01.png';


function Roster() {
  return (
    <div className="Home">
      <Navbar />
      Roster
      <img src={logo} className="App-logo" alt="logo" />
      <FortyTwoArtistCards />
      <SoundzOrganicArtistCards />
      <Particles id="tsparticles" />
    </div>
  );
}

export default Roster;