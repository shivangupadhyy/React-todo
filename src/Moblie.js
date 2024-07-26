import React from "react";
import MobileList from "./MobileList";
import books from './books.json'



export default function Moblie() {
  return (
    <div>
      {books.map((ele)=>{
        return <MobileList
        image={ele.image}
        brandName={ele.brandName}
        price={ele.price}
      />
      })}      
      
    
    </div>
  );
}
