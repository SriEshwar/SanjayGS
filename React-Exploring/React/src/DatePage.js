// src/DatePage.jsx
import React from 'react';

const DatePage = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime= new Date().toLocaleTimeString();
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Today's date is: {currentDate}</p>
      <p>Today's date is: {currentTime}</p>


    </div>
  );
};

export default DatePage;
