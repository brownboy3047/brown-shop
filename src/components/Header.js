import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// *components
import SearchBar from "./SearchBar";

// *style
import "./Header.css";
import { useCart } from "../hooks/useCart";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    state: { cart },
  } = useCart();

  return (
    <header className="header">
      <div className="head">
        <Link to="/" className="head-logo">
          <h1>OGANI</h1>
        </Link>

        <nav className="head-nav" id={showMenu ? "head-nav-menu" : ""}>
          <div
            className="head-nav-close"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="bi bi-x-square-fill"></i>
          </div>

          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/cart">CART</NavLink>
        </nav>

        <div className="head-cart">
          <Link to="./cart">
            <i className="bi bi-cart-check-fill"></i>
          </Link>
          <span>{cart.length}</span>
        </div>

        <div className="head-menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <i className="bi bi-list"></i>
        </div>
      </div>

      <SearchBar />
    </header>
  );
};

export default Header;
