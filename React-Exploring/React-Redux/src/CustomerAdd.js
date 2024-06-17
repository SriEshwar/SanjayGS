import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from './action';

export default function CustomerAdd() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addCustomerHandler = () => {
    if (input.trim()) {
      dispatch(addCustomer(input.trim()));
      setInput('');
    }
  };

  return (
    <div>
      <h3>Add New Customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addCustomerHandler}>Add</button>
    </div>
  );
}
