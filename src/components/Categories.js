import { useParams } from "react-router-dom";

//*Hook
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../hooks/useCart";

//*style
import "./Categories.css";

const Categories = () => {
  const { department } = useParams();

  const url = "https://fakestoreapi.com/products/category/" + department;
  const { data: products, error, loading } = useFetch(url);

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
    <div className="categories">
      <div>
        {loading && <div className="loading"> Loading... </div>}
        {error && <div className="error">{error}</div>}
        {products &&
          products.map((product) => (
            <div key={product.id} className="cat-details-info">
              <img src={product.image} alt="product image" />

              <div className="cat-details-text">
                <h3>{product.title}</h3>
                <div className="cat-details-rating">
                  <span className="rate">Rating: {product.rating.rate}</span>
                  <span className="count">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <div className="cat-details-price">${product.price}</div>
                <h5>Category: {product.category}</h5>

                {/* Add to cart */}
                <div className="cat-product-info-button">
                  {cart.some((prod) => prod.id === product.id) ? (
                    <button
                      onClick={() => removeCart(product)}
                      className="remove-cart"
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button onClick={() => addCart(product)} className="add">
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
