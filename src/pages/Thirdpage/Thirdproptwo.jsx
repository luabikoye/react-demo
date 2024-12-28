import React from 'react'
import "./Thirdproptwo.css"
import pict from "../../images/Frame 7 (1).png"

const Thirdproptwo = ({p1}) => {
  return (
    <div className="firs">
      <h4>{p1}</h4>
      <img src={pict} alt="" />
    </div>
  );
}

export default Thirdproptwo