import React from "react";
import Fooddetails from "./Fooddetails.jsx";

const Foods = ({data}) => (
  <div>
    <ul className="food-list">
    {data.map((e,i)=>{
        return (
          <li className="food-list-item">
          <Fooddetails e={e} key={i}/>
          </li>
        )
      })}
    </ul>
  </div>
);

export default Foods;
