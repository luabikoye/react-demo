import "./Header.css";
import pic from "../../../images/logoidice 1.png";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";

const Head = () => {

  const [isHero, setIsHero] = useState (false);

const click = () => {
  setIsHero (!isHero)
}

  return (
    <div className="headerholder">
      <nav className="headhold">
        <div className="headinside">
          <img src={pic} alt="" />
          <div className="headcontent">
            <div className="word">
              <a href="/">Home</a>
              <a href="/apply">About</a>
              <a href="">Contact</a>
            </div>

            
              <a className="buti" href="/apply"><button>Get Started</button></a>
            
          </div>
          <div className="bar" onClick={click}>
            {isHero ? <GiCancel /> : <RxDropdownMenu />}
          </div>
        </div>

        <div className={`responsivenessbar ${isHero ? "active" : ""}`}>
          <div className="headcontent2">
            <div className="word2">
              <a href="/">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </div>
           <a className="buti" href="/apply"> <button>
             Apply Now
            </button></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Head;
