import React from 'react'
import picto from "../../images/Frame 7.png"
import "./Fifthpropthree.css"

const Fifthpropthree = ({u1, choosie}) => {
  return (
    <div className="fireysiy">
      <a href={choosie}>
        <h4>{u1}</h4>
      </a>

      <img src={picto} alt="" />
    </div>
  );
}

export default Fifthpropthree