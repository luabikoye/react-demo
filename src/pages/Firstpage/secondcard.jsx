import React from 'react'
import "./secondcard.css"
import pic from "../../images/Frame 7 (1).png"

const Secondcard = ({h1, }) => {
  return (
    <div className="fir">
        <h4>{h1}</h4>
      <img src={pic} alt="" />
    </div>
  );
}

export default Secondcard;