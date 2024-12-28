import React from 'react'
import "./Eightpropthree.css"
import picto from "../../images/Frame 7.png"

const Eightpropthree = ({echoose, mq1}) => {
  return (
    <div className="efirey">
      <a href={echoose}>
        <h4>{mq1}</h4>
      </a>

      <img src={picto} alt="" />
    </div>
  );
}

export default Eightpropthree