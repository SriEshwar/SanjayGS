import React, { useEffect, useState } from 'react'

const CounteruseEffect = () => {
    const [count,setCount]=useState(0);
    const [msg,setMsg]=useState('Initial Message');

    useEffect(()=>{
        console.log("Component Mount / Updated");
        console.log(msg);
        console.log("Count is increase to",count);
    })
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
        <h1>The count has been Increase {count}</h1>
        <button onClick={()=>{setMsg('Handle event click')}}>Update Msg</button>
    </div>
    
  )
}

export default CounteruseEffect

