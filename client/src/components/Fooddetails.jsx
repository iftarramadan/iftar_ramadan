import React, { useState } from 'react';
import axios from 'axios';

const Fooddetails = ({e,mekla}) => {
  const [togle,setTogle]=useState(false)
  const togli=()=>{
    setTogle(!togle)
  }

  const suprimi=()=>{
    axios.delete('http://localhost:3000/api/food/'+ e.price).then((result)=>{
        mekla()
    }).catch((err)=>{
        console.log(err);
    })
}



  return (<div>
    <img src={e.imageUrl} onClick={togli}/>
    <h1>{e.name}</h1>
     {
    togle===true && 
    <div>
      <h2>{e.price}</h2>
      <h2>{e.categories}</h2>
      <h2>{e.description}</h2>
      <input type="button" value="delete" onClick={suprimi}/>
    </div>
    }
 </div>)
}

export default Fooddetails;


