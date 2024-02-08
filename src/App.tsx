import React from 'react';
import logo from './logo.svg';
import './App.css';
import PreviousBookings from './PreviousBookings';
import CurrentBooking from './CurrentBooking';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentBooking />
      <PreviousBookings />
    </div>
  );
}

export default App;
