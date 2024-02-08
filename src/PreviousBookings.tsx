import React from 'react';

const PreviousBookings: React.FC = () => {
  return (
    <>
      <div className="PreviousBookingsHeader">
        <h2>Previous Bookings</h2>
      </div>  
      <div className="PreviousBookings">
        {/* Example BookingCard, repeat for each previous booking */}
        <div>
        <p className="completed">Completed</p>
        <div className="BookingCard Completed">
        
          <h3>Mic Mac Parking</h3>
          <p>01/02/2024 - 02/02/2024</p>
          <p>9$</p>
          <button className="BookAgainButton">Book Again</button>
          <button className="ViewDetailsButton">View Details</button>
        </div>
        </div>

        <div>
        <p className="completed">Completed</p>
        <div className="BookingCard Completed">
        
          <h3>Alex's home Parking</h3>
          <p>05/02/2024 - 010/02/2024</p>
          <p>100$</p>
          <button className="BookAgainButton">Book Again</button>
          <button className="ViewDetailsButton">View Details</button>
        </div>
        </div>
        <div>
        <p className="completed">Completed</p>
        <div className="BookingCard Completed">
        
          <h3>Joy's house Parking</h3>
          <p>10/03/2024 - 11/03/2024</p>
          <p>30$</p>
          <button className="BookAgainButton">Book Again</button>
          <button className="ViewDetailsButton">View Details</button>
        </div>
        </div>
        <div>
        <p className="completed">Completed</p>
        <div className="BookingCard Completed">
        
          <h3>HSC Parking</h3>
          <p>04/02/2024 - 04/02/2024</p>
          <p>17$</p>
          <button className="BookAgainButton">Book Again</button>
          <button className="ViewDetailsButton">View Details</button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default PreviousBookings;