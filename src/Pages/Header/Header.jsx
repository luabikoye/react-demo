import "./Header.css";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";


function Header() {
    return (
      <div className="Header">
        <header className="head">
          <div className="headbody">
            <div className="headlogo">Dimeji</div>

            <nav className="links">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Info</a>
              <a href="">More</a>
            </nav>
            <div className="secondlink">
              <div className="wordslink">
                <a href="">login/register</a>
              </div>

              <div className="iconlink">
                <a href="">
                  <FaSearchPlus />
                </a>
                <div className="iconlinkone">
                  <a href="">
                    <FaRegHeart />
                  </a>
                  <div className="numb">2</div>
                </div>
                <div className="iconlinkone">
                  <a href="">
                    <FiShoppingBag />
                  </a>
                  <div className="numb">4</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}



export default Header;
