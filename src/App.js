import './App.css';
import React from "react";
import Roster from './views/Roster.js';
import Landing from './views/Landing.js';
import Bookings from './views/Bookings';
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
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Roster" element={<Roster />} />
        <Route path="/Bookings" element={<Bookings />} />
    </Routes>
    </div>
    </Router>
  );
}


export default App;
