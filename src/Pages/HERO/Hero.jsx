import "./Hero.css";
import PropsCard from "./PropsCard";
import image from "../../images/category-1.jpeg"
import img from "../../images/category-2.jpeg"
import imag from "../../images/category-5.jpeg"
import im from "../../images/category-3.jpeg"

function Hero() {
    return (
      <div className="hero">
        <div className="firsthero">
          <div className="text">
            <h2>Women's Fashion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              molestiae asperiores. Aperiam autem ipsa culpa nobis neque,
              explicabo at fugit!
            </p>
            <button className="buttons">Shop Now</button>
          </div>
        </div>

        <div className="secondhero">
          <PropsCard images={image} title="Mens wear" p="500 items" />
          <PropsCard images={img} title="women's fashion" p="400 items" />
          <PropsCard images={imag} title="modern fashion" p="400 items" />
          <PropsCard images={im} title="kid's wear" p="700 items" />
        </div>
      </div>
    );
}

export default Hero;