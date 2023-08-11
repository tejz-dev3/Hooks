import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [data, setData] = useState([])
     
   const url ="https://jsonplaceholder.typicode.com/posts"

    useEffect(()=>{
        
            const fetchedData = async() =>{
                try{
                const response = await fetch(url);
                const apiData = await response.json()
                setData(apiData)
            }catch(error){
                alert("Error")
            }
        }
        fetchedData()
    },[])


  return (
    <div>
        <h1>Users data</h1>
        <ul>
            {data.map(user =>(
                <li key={user.id}>{user.title}</li>
            ))}
        </ul>
    </div>
  )
}
export default UseEffect