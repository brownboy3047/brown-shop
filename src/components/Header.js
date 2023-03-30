import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// *components
// import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

// *style
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          {/* <Dropdown /> */}
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>

        <div className="head-cart">
          <i className="bi bi-heart-fill"></i>
          <i className="bi bi-cart-check-fill"></i>
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
