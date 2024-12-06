import "./Body3.css"
import Body3Props from "./Body3Prop";
import first from "../../images/product-1.jpeg"
import second from "../../images/product-2.jpeg"
import third from "../../images/product-3.jpeg"
import fourth from "../../images/product-4.jpeg"
import fifth from "../../images/product-5.jpeg"
import sixth from "../../images/product-6.jpeg"
import seventh from "../../images/product-7.jpeg"
import eight from "../../images/product-8.jpeg"

function Newbody() {
    return (
      <div className="container">
        <div className="contentholder">
          <div className="holder">
            <h1>NEW PRODUCTS</h1>
            <div className="buttonpare">
              <button className="butty">All</button>
              <button className="butt">Women's</button>
              <button className="butt">Men's</button>
              <button className="butt">Kids</button>
              <button className="butt">Accessories</button>
              <button className="butt">Cosmetics</button>
            </div>
          </div>
        </div>

        <div className="contenthold">
          <Body3Props
            images={first}
            Name="Button twisted cloth"
            Dollars="$59"
          />
          <Body3Props images={second} Name="fine cloth" Dollars="$61" />
          <Body3Props images={third} Name="ugly cloth" Dollars="$65" />
          <Body3Props images={fourth} Name="Best cloth" Dollars="$75" />
          <Body3Props images={fifth} Name="Best dress" Dollars="$25" />
          <Body3Props images={sixth} Name="clothes " Dollars="$25" />
          <Body3Props images={seventh} Name="Ripped Shirts " Dollars="$85" />
          <Body3Props images={eight} Name="Ripped jeans " Dollars="$90" />
        </div>
      </div>
    );
}



export default Newbody;