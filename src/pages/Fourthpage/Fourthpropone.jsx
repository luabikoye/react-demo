import React from 'react'
import "./Fourthpropone.css"
import pictures from "../../images/Frame 7.png"

const Fourthpropone = ({y1, bv }) => {
  return (
    <div className="waterys">
      <div className="oneys">
        <h5>{y1}</h5>
        <p>{bv}</p>
      </div>
      <img src={pictures} alt="" />
    </div>
  );
}

export default Fourthpropone