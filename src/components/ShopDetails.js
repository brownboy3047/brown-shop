import { useParams } from "react-router-dom";

// * custom hook
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../hooks/useCart";

//*style
import "./ShopDetails.css";

const ShopDetails = () => {
  const { id } = useParams();

  const url = "https://fakestoreapi.com/products/" + id;
  const { data: product, error, loading } = useFetch(url);

  const {
    state: { cart },
    dispatch,
  } = useCart();

  const addCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

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

              <div className="shop-details-cart">
                {/*Add to cart */}
                {cart.some((prod) => prod.id === product.id) ? (
                  <button
                    onClick={() => removeCart(product)}
                    className="remove-cart"
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    onClick={() => addCart(product)}
                    className="shop-details-add"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopDetails;
