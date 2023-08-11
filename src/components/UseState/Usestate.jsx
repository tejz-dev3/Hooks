import React, { useEffect, useState } from 'react'

function Usestate() {
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log('useEffect')
    },[])

    const HandleIncrememnt = () =>{
        setCount(count + 1)
    }

    const HandleDecrement = () =>{
         setCount(count - 1)
    }

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={HandleIncrememnt}>Increment</button>
        <button onClick={HandleDecrement}>Decrement</button>
    </div>
  )
}

export default Usestate