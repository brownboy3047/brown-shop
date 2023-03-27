//* style
import "./Contact.css";

const Contact = () => {
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
    </div>
  );
};

export default Contact;
