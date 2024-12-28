import React from 'react'
import "./Secondpropthree.css"
import pict from "../../images/Frame 7.png"

const Secondpropthree = ({q1}) => {
  return (
    <div className="firees">
      <a href="/apply">
        <h4>{q1}</h4>
      </a>

      <img src={pict} alt="" />
    </div>
  );
}

export default Secondpropthree