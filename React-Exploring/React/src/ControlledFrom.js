import React, { useState } from 'react'

function ControlledFrom() {
    const [name,setName]=useState('');

   const handleChange =(event)=>{
    setName(event.target.value);
   }


   const handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Submited Form ${name}`);
   }



  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='text' value={name} onChange={handleChange} placeholder='Enter your name'></input>
        </label>
        <button type='submit'>submit</button>
    </form>
  )
}

export default ControlledFrom
