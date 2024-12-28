import React from 'react'
import "./Thirdpropthree.css"
import picto from "../../images/Frame 7.png"

const Thirdpropthree = ({m1, choose}) => {
  return (
    <div className="firey">
      <a href={choose}>
        <h4>{m1}</h4>
      </a>

      <img src={picto} alt="" />
    </div>
  );
}

export default Thirdpropthree