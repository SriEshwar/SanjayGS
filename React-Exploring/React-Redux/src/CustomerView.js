import React from 'react';
import { useSelector } from 'react-redux';

export default function CustomerView() {
  const customers = useSelector(state => state.customers);

  return (
    <div>
      <h1>Customer View</h1>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>{customer}</li>
        ))}
      </ul>
    </div>
  );
}
