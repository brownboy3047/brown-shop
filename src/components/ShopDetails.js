import { useParams } from "react-router-dom";

// *hook
import { useFetch } from "../hooks/useFetch";

//*style
import "./ShopDetails.css";

const ShopDetails = () => {
  const { id } = useParams();

  const url = "https://fakestoreapi.com/products/" + id;
  const { data: product, error, loading } = useFetch(url);

  return (
    <div className="shop-details-container">
      {loading && <div className="loading"> Loading... </div>}
      {error && <div className="error">{error}</div>}
      <div className="shop-details">
        {product && (
          <div className="shop-details-info">
            <img src={product.image} alt=" product image" />

            <div className="shop-details-text">
              <h3>{product.title}</h3>
              <div className="shop-details-rating">
                <span className="rate">Rating: {product.rating.rate}</span>
                <span className="count">({product.rating.count} reviews)</span>
              </div>
              <div className="shop-details-price">${product.price}</div>
              <p>{product.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopDetails;
