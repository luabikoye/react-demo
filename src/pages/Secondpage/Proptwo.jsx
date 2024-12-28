import React from "react";
import "./Proptwo.css";
import picture from "../../images/Frame 7.png";

const Propcard = ({ w1, pa }) => {
  return (
    <div className="water">
      <div className="one">
        <h5>{w1}</h5>
        <p>{pa}</p>
      </div>
      <img src={picture} alt="" />
    </div>
  );
};

export default Propcard;
