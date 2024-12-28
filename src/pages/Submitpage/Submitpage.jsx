import React from 'react'
import "./Submitpage.css"
import piclogo from "../../images/logoidice 1.png"

const Submit = () => {
  return (
    <div className="submitcont">
      <div className="create">
        <div className="ins">
          <img src={piclogo} alt="" />
          <div className="wrd">
            <h4>Registration Successful</h4>
            <p>
              Thank you for completing your registration. We’re excited to have
              you onboard and look forward to connecting with you soon. If you
              have any questions or need assistance, please don’t hesitate to
              reach out.
            </p>
            <a className='dmje' href="/gohome"><button>Home</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit