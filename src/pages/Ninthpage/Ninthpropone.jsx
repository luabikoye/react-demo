import React from 'react'
import "./Ninthpropone.css"
import pictures from "../../images/Frame 7.png"

const Ninthpropone = ({pq1, xd}) => {
  return (
    <div className="wateriesys">
      <div className="oneiesys">
        <h5>{pq1}</h5>
        <p>{xd}</p>
      </div>
      <img src={pictures} alt="" />
    </div>
  );
}

export default Ninthpropone