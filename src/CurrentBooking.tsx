import React from 'react';

const CurrentBooking: React.FC = () => {
  return (
    <>
   
    <div className="CurrentBooking">
      <h2>Current Booking</h2>
      <p className="BookingHeader">Confirmed</p>
      <div className='mainCurrentDiv'>
        <div className="BookingDetails">
        <h3>Dalhousie Parking</h3>
        <p>01/02/2024 - 04/02/2024</p>
        <p>10$</p>
        <button className="bluebutton">Edit</button>
        <button className="redbutton">Cancel Booking</button>
        <button className="DetailsButton">View Details</button>
      </div>
      <div className='image'>
        <img src="https://c8.alamy.com/comp/F36XJE/dalhousie-university-parking-on-studley-campus-in-halifax-ns-F36XJE.jpg" alt="" />
      </div>
      </div>

      </div>
    
    </>
  );
};

export default CurrentBooking;
