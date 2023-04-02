import { Link } from "react-router-dom";

// * custom hook
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../hooks/useCart";

//* style
import "./Shop.css";

const Shop = () => {
  const url = "https://fakestoreapi.com/products";
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
    <div className="shop">
      {loading && <div className="loading"> Loading... </div>}
      {error && <div className="error">{error}</div>}
      <ul className="shop-products-list">
        {products &&
          products.map((product) => (
            <li key={product.id} className="shop-product">
              <img src={product.image} alt="" />
              <div className="shop-product-info">
                <h4>{product.title}</h4>
                <p>Category: {product.category}</p>
                <p className="shop-product-info-price">
                  Price: ${product.price}
                </p>

                <div className="shop-product-info-button">
                  <Link to={`/shop/${product.id}`}>
                    <button>VIEW MORE</button>
                  </Link>

                  {/*Add to cart */}
                  {cart.some((prod) => prod.id === product.id) ? (
                    <button
                      onClick={() => removeCart(product)}
                      className="remove-cart"
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button onClick={() => addCart(product)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Shop;
