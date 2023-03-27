import { Link, NavLink } from "react-router-dom";

// *components
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

// *style
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="head">
        <Link to="/" className="head-logo">
          <h1>OGANI</h1>
        </Link>

        <nav className="head-nav">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <Dropdown />
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>

        <div className="head-cart">
          <i className="bi bi-heart-fill"></i>
          <i className="bi bi-cart-check-fill"></i>
        </div>
      </div>

      <SearchBar />
    </header>
  );
};

export default Header;
