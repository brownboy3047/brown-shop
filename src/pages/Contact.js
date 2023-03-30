import { useState } from "react";

//* style
import "./Contact.css";

const Contact = () => {
  const [value, setValue] = useState("");

  return (
    <div className="contact-container">
      <div className="contact"></div>

      <div className="contact-info">
        <div className="contact-phone">
          <span className="icon-phone">
            <i className="bi bi-telephone-fill"></i>
          </span>
          <h4>Phone</h4>
          <p>+01-3-8888-6868</p>
        </div>

        <div className="contact-address">
          <span className="icon-address">
            <i className="bi bi-geo-alt"></i>
          </span>
          <h4>Address</h4>
          <p>60-49 Road 11378 Lagos</p>
        </div>

        <div className="contact-time">
          <span className="icon-time">
            <i className="bi bi-clock"></i>
          </span>
          <h4>Open Time</h4>
          <p>10:00 am to 23:00 pm</p>
        </div>

        <div className="contact-email">
          <span className="icon-email">
            <i className="bi bi-envelope"></i>
          </span>
          <h4>Email</h4>
          <p>brownboy3047@gmail.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h1>Leave Message</h1>

        <form>
          <input
            className="form-input"
            type="text"
            placeholder="Your name"
            autoComplete="off"
            required
          />
          <input
            className="form-input"
            type="email"
            placeholder="Your email"
            autoComplete="off"
            required
          />
          <textarea
            className="form-input"
            cols="10"
            rows="10"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
          />

          <button className="form-btn">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
