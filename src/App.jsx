import React, { useState } from 'react'

export default function App() {
    // let counter = 15

    let [counter, setCounter] = useState(15)

    const addValue = ()=>{
       if(counter + 1 > 20){
        alert("limit exceed")
       }
       else{
        setCounter(counter+1)
        console.log(counter)
       }
    }

    const decValue = ()=>{
      if(counter-1 < 0){
        alert("value cannot be negative")
      }
      else{
        setCounter(counter-1)
        console.log(counter)
      }
    }
    
  return (
  
    <div>
      <>
      <div/>
      <h1>Chai aur react</h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={decValue}>Decrase Value</button>
      
      </>
    </div>
  )
}
