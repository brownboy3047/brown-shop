import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((product) =>
          product.id === action.payload.id
            ? (product.qty = action.payload.qty)
            : product.qty
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  //   const addCart = (add) => {
  //     dispatch({ type: "ADD_TO_CART", payload: add });
  //   };

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
