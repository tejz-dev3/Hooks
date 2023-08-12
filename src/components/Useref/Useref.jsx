import React from 'react'
import { useState, useEffect, useRef } from 'react'


function Useref() {
 const [firstName, setfirstName] = useState("")
const count = useRef(1)


useEffect(() => {
    count.current  = count.current + 1
})
 const handleInput =(e) =>{
   setfirstName(e.target.value)
 }

  return (
    <div>
        <h1>useRef</h1>
        <input type="text" name="firstName" id="firstName" onChange={handleInput}/>
        <h2>Typing : {firstName}</h2>
        <h2>Component renderd {count.current} </h2>
    </div>
  )
}

export default Useref