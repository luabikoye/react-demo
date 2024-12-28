import React from 'react'
import "./Seventhpropthree.css"
import picto from "../../images/Frame 7.png"

const Seventhpropthree = ({cheesie, un1}) => {
  return (
    <div className="fireysiyie">
      <a href={cheesie}>
        <h4>{un1}</h4>
      </a>

      <img src={picto} alt="" />
    </div>
  );
}

export default Seventhpropthree