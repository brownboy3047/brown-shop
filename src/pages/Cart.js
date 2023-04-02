import { useEffect, useState } from "react";

// *custom hook
import { useCart } from "../hooks/useCart";

//* style
import "./Cart.css";

const Cart = () => {
  const [total, setTotal] = useState();

  const {
    state: { cart },
    dispatch,
  } = useCart();

  useEffect(() => {
    const totalProduct = cart.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );
    setTotal(Math.round(totalProduct));
  }, [cart]);

  const handleDelete = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div className="cart">
      <div className="cart-container">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h4>{product.title}</h4>

              {/* quantity of product */}
              <div className="cart-container-count">
                <select
                  name="quantity"
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: { id: product.id, qty: e.target.value },
                    })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <span className="cart-container-price">${product.price}</span>
              <i
                className="bi bi-trash3"
                onClick={() => handleDelete(product)}
              ></i>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-summary">
        <div className="cart-summary-price">
          <h4 className="cart-subtotal">Subtotal ({cart.length}) items</h4>
          <p className="cart-total">Total: ${total}</p>
        </div>

        <button className="cart-btn" disabled={cart.length === 0}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
