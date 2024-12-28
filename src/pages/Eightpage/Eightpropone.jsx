import React from 'react'
import "./Eightpropone.css"
import pictures from "../../images/Frame 7.png"

const Eightpropone = ({kk1, cvv}) => {
  return (
    <div className="watersiyy">
      <div className="onesiyy">
        <h5>{kk1}</h5>
        <p>{cvv}</p>
      </div>
      <img src={pictures} alt="" />
    </div>
  );
}

export default Eightpropone