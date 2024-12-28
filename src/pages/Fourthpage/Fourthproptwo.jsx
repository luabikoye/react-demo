import React from 'react'
import "./Fourthproptwo.css"
import pict from "../../images/Frame 7 (1).png"

const Fourthproptwo = ({n1}) => {
  return (
    <div className="firys">
      <h4>{n1}</h4>
      <img src={pict} alt="" />
    </div>
  );
}

export default Fourthproptwo