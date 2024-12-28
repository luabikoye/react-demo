import React from 'react'
import "./Fifthproptwo.css"
import pict from "../../images/Frame 7 (1).png"

const Fifthproptwo = ({w1}) => {
  return (
    <div className="firies">
      <h4>{w1}</h4>
      <img src={pict} alt="" />
    </div>
  );
}

export default Fifthproptwo