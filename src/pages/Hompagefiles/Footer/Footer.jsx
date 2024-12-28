import React from 'react'
import "./Footer.css"
import pic from "../../../images/logoidice 1.png"
import fb from "../../../images/Facebook.png"
import ig from "../../../images/Instagram.png"
import x from "../../../images/Vector (1).png"
import linked from "../../../images/Vector.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="parentfooter">
        <div className="beginning">
          <div className="footerlogo">
            <img src={pic} alt="" />
            <p>
              We empower businesses to achieve their goals through innovative
              strategies and expert guidance, fostering growth and long-term
              success.
            </p>
          </div>
          <div className="contentholds">
            <div className="first">
              <h5>company</h5>

              <div className="input">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div className="second">
              <h5>Support</h5>
              <div className="input">
                <a href="">Support</a>
                <a href="">Privacy</a>
                <a href="">Terms Of Service</a>
              </div>
            </div>
            <div className="third">
              <h5>Connect with us</h5>
              <div className="linki">
                <a href="">
                  <img src={fb} alt="" />
                </a>
                <a href="">
                  <img src={ig} alt="" />
                </a>
                <a href="">
                  <img src={x} alt="" />
                </a>
                <a href="">
                  <img src={linked} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="last">
          <h5>Copyright © 2024 Silvershell Consulting. All rights reserved</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;