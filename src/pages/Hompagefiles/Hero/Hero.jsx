import React from 'react'
import "./Hero.css"


function Hero() {
    return (
      <div className="hero">
        <div className="herobox">
          <div className="inhero">
            <div className="main">
              <h1>Empowering Businesses, Driving Excellence</h1>
              <h6>Your Partner in Strategic Growth.</h6>

              <a className='buti' href="/apply"> <button>
             Apply Now
            </button></a>
             
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;