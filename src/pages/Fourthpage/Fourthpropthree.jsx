import React from 'react'
import "./Fourthpropthree.css"
import picto from "../../images/Frame 7.png"

const Fourthpropthree = ({b1, choosey}) => {
  return (
    <div className="fireys">
      <a href={choosey}>
        <h4>{b1}</h4>
      </a>

      <img src={picto} alt="" />
    </div>
  );
}

export default Fourthpropthree