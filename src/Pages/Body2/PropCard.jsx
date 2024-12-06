import "./PropCard.css"
import {
  BsArrowsAngleExpand,
} from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";

function Prop ({pic, h4, p }) {
    return (
      <div className="content">
        <div className="imgaiconss">
          <div className="imga">
            <img src={pic} alt="" />
          </div>
          <div className="iconss">
            <a href="">
              <BsArrowsAngleExpand />
            </a>
            <a href="">
              <FaRegHeart />
            </a>
            <a href="">
              <RiShoppingBag2Fill />
            </a>
          </div>
        </div>

        <div className="contentinside">
          <p>{p}</p>
          <div className="stars">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <h4>{h4}</h4>
        </div>
      </div>
    );
}


export default Prop;