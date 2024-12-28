import React from 'react'
import "./Eightproptwo.css"
import pict from "../../images/Frame 7 (1).png"

const Eightproptwo = ({pp1}) => {
  return (
    <div className="efirs">
      <h4>{pp1}</h4>
      <img src={pict} alt="" />
    </div>
  );
}

export default Eightproptwo