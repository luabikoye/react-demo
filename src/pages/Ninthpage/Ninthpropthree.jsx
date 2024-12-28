import React from 'react'
import "./Ninthpropthree.css"
import picto from "../../images/Frame 7.png"

const Ninthpropthree = ({echeesie, gr1}) => {
  return (
    <div className="fireysiyies">
      <a href={echeesie}>
        <h4>{gr1}</h4>
      </a>

      <img src={picto} alt="" />
    </div>
  );
}

export default Ninthpropthree