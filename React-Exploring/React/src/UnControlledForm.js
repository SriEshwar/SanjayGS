import React, { useRef } from 'react'

function UnControlledForm() {
    const nameRef=useRef(null);

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Submitted name: ${nameRef.current.value}`);
    }


  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='text' ref={nameRef}></input>
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UnControlledForm