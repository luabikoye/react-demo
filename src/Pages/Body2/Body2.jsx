import "./Body.css";
import imgs from "../../images/product-1.jpeg";
import { IoStarSharp } from "react-icons/io5";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Prop from "./PropCard";
import imgg from "../../images/product-5.jpeg"
import imge from "../../images/product-8.jpeg"
import imges from "../../images/product-2.jpeg"
import imggs from "../../images/product-3.jpeg"
import ims from "../../images/product-4.jpeg"
import im from "../../images/product-5.jpeg"
import ime from "../../images/product-6.jpeg"
import imes from "../../images/product-7.jpeg"

function Body2() {
  return (
    <div className="body2">
      <div className="body2holder">
        <Prop pic={imgg} p="mens wear" h4="$60" />
        <Prop pic={imges} p="flowy stripped skirt" h4="$49" />
        <Prop pic={imggs} p="Cotton T-Shirt" h4="$49" />
        <Prop pic={ims} p="Slim striped pocket shirt" h4="$49" />
        <Prop pic={im} p="Fit micro corduroy shirt" h4="$49" />
        <Prop pic={ime} p="Tropical Kimono" h4="$49" />
        <Prop pic={imes} p="Contrasting sunglasses" h4="$49" />
        <Prop pic={imge} p="Water resistant backpack" h4="$49" />

       
      </div>
    </div>
  );
}

export default Body2;





