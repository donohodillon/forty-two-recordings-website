import React from "react";
import "./BookingsForm.css";

const BookingsForm = () => {
  return (
    <div className="bookings-form">                  
      <body>
    <form action="/" class="decor">
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">
        <h1>Request booking</h1>
        <input type="text" placeholder="Artist"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message..." rows="5"></textarea>
        <button type="submit-booking" href="/">Submit</button>
      </div>
    </form>
  </body>
    </div>
  );
};

export default BookingsForm;
