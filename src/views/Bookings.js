// import logo from '../42Recordings_Logo_Black+Transparent-01.png';
import Navbar from "../components/NavBar";
import React from "react";
import Particles from '../components/Particles';
import BookingsForm from "../components/BookingsForm";

function Bookings() {
  return (
    <div className="Bookings">
      <Navbar />
      Book Artists Here!
      <BookingsForm/>
      <Particles id="tsparticles" />
    </div>
  );
}

export default Bookings;