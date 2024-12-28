import React from 'react'
import "./Seventhpropone.css"
import pictures from "../../images/Frame 7.png"

const Seventhpropone = ({be1, ng}) => {
  return (
    <div className="wateriesy">
      <div className="oneiesy">
        <h5>{be1}</h5>
        <p>{ng}</p>
      </div>
      <img src={pictures} alt="" />
    </div>
  );
}

export default Seventhpropone