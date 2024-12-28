import React from 'react'
import "./Sixthpropthree.css"
import picto from "../../images/Frame 7.png"

const Sixthpropthree = ({choosien, o1}) => {
  return (
    <div className="fireysiyes">
      <a href={choosien}>
        <h4>{o1}</h4>
      </a>
      <img src={picto} alt="" />
    </div>
  );
}

export default Sixthpropthree