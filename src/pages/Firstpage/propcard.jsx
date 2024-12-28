import React from 'react'
import "./propcard.css"
import picture from "../../images/Frame 7.png"

const Propcard = ({ h1, p }) => {
  return (
    <div className="fire">
      <div className="boths">
        <h5>{h1}</h5>
        <p>{p}</p>
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Propcard



