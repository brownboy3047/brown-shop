import { Link } from "react-router-dom";

//*style
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-one">
          <h1 className="footer-one-logo">OGANI</h1>

          <p>Address: 60-49 Road 11378 New York</p>
          <p>Phone: +65 11.188.888</p>
          <p>Email: hireme@gmail.com</p>
        </div>

        <div className="footer-two">
          <h5>Useful Links</h5>

          <ul className="footer-two-link">
            <Link to="#">
              <li>About Us</li>
            </Link>
            <Link to="#">
              <li>About Our Shop</li>
            </Link>
            <Link to="#">
              <li>Secure Shopping</li>
            </Link>
            <Link to="#">
              <li>Delivery infomation</li>
            </Link>
            <Link to="#">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>

        <div className="footer-three">
          <h5>Join Our Newsletter Now</h5>

          <p>Get E-mail updates about our latest shop and special offers.</p>

          <div className="footer-three-input">
            <input
              type="text"
              placeholder="Enter your mail"
              autoComplete="off"
            />
            <button>SUBSCRIBE</button>
          </div>

          <div className="footer-three-media">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
      </div>

      <p className="footer-end">
        Copyright ©2023 All rights reserved | Made by Afolabi Mabunmi
      </p>
    </footer>
  );
};

export default Footer;
