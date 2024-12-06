import "./Props.css";

function PropsCard({ images, title, p }) {
  return (
    <div style={{ backgroundImage: `url(${images})`}} className="firstbox">
      <div className="firstboxinside">
        <div>
          <h2>{title}</h2>
          <p>{p}</p>
        </div>
        <button className="buttons">Shop Now</button>
      </div>
    </div>
  );
}

export default PropsCard;
