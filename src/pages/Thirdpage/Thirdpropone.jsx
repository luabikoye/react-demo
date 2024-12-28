import React from 'react'
import pictures from "../../images/Frame 7.png"
import "./Thirdpropone.css"

const Thirdpropone = ({k1, cv}) => {
  return (
    <div className="waters">
      <div className="ones">
        <h5>{k1}</h5>
        <p>{cv}</p>
      </div>
      <img src={pictures} alt="" />
    </div>
  );
}

export default Thirdpropone