import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

//*style
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-info">
        <div className="home-info-text">
          <span>NEW ARRIVAL</span>
          <h2>100% Cotton</h2>
          <p>Free Pickup and Delivery Available</p>

          <Link to="/shop">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
