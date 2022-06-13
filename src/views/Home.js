// import logo from '../42Recordings_Logo_Black+Transparent-01.png';
// import Particles from '../components/Particles';
import Navbar from "../components/NavBar";
import React from "react";
import ArtistCards from "../components/ArtistCards";
import Particles from '../components/Particles';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      Home Page
      <ArtistCards />
      <Particles id="tsparticles" />
    </div>
  );
}

export default Home;