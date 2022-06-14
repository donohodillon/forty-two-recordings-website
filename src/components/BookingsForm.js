import React from "react";
import "./BookingsForm.css";

const BookingsForm = () => {
  return (
    <div className="bookings-form">                  
      <form>
        <label>
            Artist Name:
            <input type="text" name="name" />
        </label>
        <label>
            Artist Name:
            <input type="text" name="name" />
        </label>
        <label>
            Artist Name:
            <input type="text" name="name" />
        </label>
            <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default BookingsForm;
