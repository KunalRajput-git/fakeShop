import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleProduct.css";
import Navbar from "../navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faBoltLightning,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { title, category, price, image, rating, description } = singleProduct;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((data) => data.json())
      .then((data) => setSingleProduct(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <h1 style={{ color: "grey",textAlign:'center' }}>
          Loading <FontAwesomeIcon icon={faSpinner} />
        </h1>
      ) : (
        <div className="singleProductContainer">
          <div className="imageContainer">
            <img src={image} />
          </div>
          <div className="ContentContainer">
            <h1 className="subHeading">{title}</h1>
            <div className="PRating">
              <h2>{category}</h2>
            </div>
            <h2>${price}</h2>
            <p>{description}</p>
            <button className="SPBtn ATCBtn">
              <FontAwesomeIcon icon={faCartPlus} /> Add To Cart
            </button>
            <button className="SPBtn">
              <FontAwesomeIcon icon={faBoltLightning} /> Buy Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetail;
