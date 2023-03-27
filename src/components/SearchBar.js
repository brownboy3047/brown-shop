import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// *style
import "./SearchBar.css";

const SearchBar = () => {
  const [viewSearch, setViewSearch] = useState(false);

  const url = "https://fakestoreapi.com/products/categories";
  const { data: departments } = useFetch(url);

  return (
    <div className="search">
      <div className="search-group">
        <aside className="search-group-menu">
          <div
            className="search-group-menu-one"
            onClick={() => setViewSearch(!viewSearch)}
          >
            <i className="bi bi-list"></i>
            <span>All Categories</span>
          </div>

          {viewSearch && (
            <ul className="search-group-menu-two">
              {departments.map((department) => (
                <Link
                  key={department}
                  onClick={() => setViewSearch(!viewSearch)}
                  to={`/shop/category/${department}`}
                >
                  <li>{department}</li>
                </Link>
              ))}
            </ul>
          )}
        </aside>

        <div className="search-group-bar">
          <input
            type="text"
            placeholder="What do you need?"
            autoComplete="off"
          />
          <button>SEARCH</button>
        </div>

        <div className="search-group-call">
          <i className="bi bi-telephone-fill"></i>
          <span>+23481XXXXXXXX</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
