import "./productCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ProductCard = ({ data }) => {
  const { title, category, price, image, rating } = data;
  const { rate, count } = rating;
  return (
    <div className="mainProductContainer">
      <div className="imgContainer">
        <img src={image} />
        <h5 className="badge">
          {rate} <FontAwesomeIcon className={parseFloat(rate) > 3.5 ? 'faStarGreen' : 'faStarYellow'} icon={faStar} /> | {count}{" "}
        </h5>
      </div>
      <div className="cardContent">
        
        <h4>{title}</h4>
        <span>{category}</span>
        <h4>${price}</h4>
      </div>
     
    </div>
  );
};

export default ProductCard;
