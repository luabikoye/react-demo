import React from 'react'
import "./Fifthpropone.css"
import pictures from "../../images/Frame 7.png"

const Fifthpropone = ({x1, jv }) => {
  return (
    <div className="wateries">
      <div className="oneies">
        <h5>{x1}</h5>
        <p>{jv}</p>
      </div>
      <img src={pictures} alt="" />
    </div>
  );
}

export default Fifthpropone