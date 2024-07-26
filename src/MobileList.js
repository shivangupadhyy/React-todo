import React from 'react'
import './MobileList.css'

export default function MobileList(props) {

  return (  
    <div className='main'>
      {console.log(props)}
     
      <img src={props.image}/>
      <div>
      <h2>{props.brandName}</h2>
      <p>$ {props.price}</p>
      <button>Add to cart</button>
      </div>
    </div>
  )
}
