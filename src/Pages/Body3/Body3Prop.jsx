import "./Body3Prop.css"
import line from "../../images/product-1.jpeg"
import { FaStarHalfAlt } from "react-icons/fa";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Fill } from "react-icons/ri";

function Body3Props({images, Name, Dollars} ) {
    return (
      <div className="product">
        <div className="pictures">
          <img src= {images} alt="" />
          <div className="highcon">
            <BsArrowsAngleExpand className="innie"/>
            <FaRegHeart className="innie"/>
            <RiShoppingBag2Fill className="innie"/>

          </div>
        </div>

        <div className="infoproduct">
          <h3>{Name}</h3>
          <div className="icon">
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
          </div>
          <p>{Dollars}</p>
        </div>
      </div>
    );
}


export default Body3Props;