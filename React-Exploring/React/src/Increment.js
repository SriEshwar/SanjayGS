import React, { useState } from 'react'

const Increment = () => {
    const [count,setcount] = useState(0);
    const [person,setPerson]=useState({firstName:'',lastName:''});

    function handleClick(params) {
        setcount(count+2);
    }

    const IncreaseFive=()=>{
        for(let i=0;i<5;i++){
            setcount(prevState=>prevState+1)
        }
    }
  return (
   <div>
    
   <button onClick={IncreaseFive}> Clicking</button>
      <h1>Click Me {count}</h1>
      <hr/>
      <input type="text" onClick={(e)=> setPerson({...person,firstName: e.target.value})}/>
      <input type="text" onClick={(e)=> setPerson({...person,lastName: e.target.value})}/>
      {JSON.stringify(person)}
      <p>FirstName :{person.firstName}</p>
      <p>LastName :{person.lastName}</p>

   </div> 
  
  )
}

export default Increment