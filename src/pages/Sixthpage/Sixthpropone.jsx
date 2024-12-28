import React from 'react'
import "./Sixthpropone.css"
import pictures from "../../images/Frame 7.png"

const Sixthpropone = ({r1, uy }) => {
  return (
    <div className="wateriesie">
      <div className="oneiesie">
        <h5>{r1}</h5>
        <p>{uy}</p>
      </div>
      <img src={pictures} alt="" />
    </div>
  );
}

export default Sixthpropone