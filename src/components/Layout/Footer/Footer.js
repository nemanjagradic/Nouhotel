import classes from "./Footer.module.css";
import footerLogo from "../../../svg/footer-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className="row">
        <div className={`col-md-3 ${classes["footer-col"]}`}>
          <div className={classes["footer-img"]}>
            <img src={footerLogo} alt="" />
          </div>
          <p>
            Nouhotel are designed to help you show the beauty of your location,
            showcase your rooms, present the facilities and features of your
            hotel and offer an easy method to book a room.
          </p>
        </div>
        <div className={`col-md-3 ${classes["footer-col"]}`}>
          <h5>Contact Us</h5>
          <p>
            support@example.com 972<br></br> Westheimer Santa Ana,<br></br>
            Illinois, USA
          </p>
          <span>1-800-123-4567</span>
        </div>
        <div className={`col-md-3 ${classes["footer-col"]}`}>
          <h5>Information</h5>
          <ul className={classes["footer-list"]}>
            <li>Our Location</li>
            <li>Carrer</li>
            <li>Customer Support</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className={`col-md-3 ${classes["footer-col"]}`}>
          <h5>Join Our Mailing List</h5>
          <p>
            Get exclusive offers, discount, travel tips and all the latest
            updates.
          </p>
          <input type="email" required placeholder="your email..." />
          <button type="submit">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7">
          <p>
            Copyright © 2023 <span>NouHotel</span>. All rights reserved
          </p>
        </div>
        <div className="col-md-5">
          <p style={{ display: "inline-block" }}>
            The International Hotel Awards:
          </p>
          <ul className={classes["footer-brands-list"]}>
            <li>
              <img src="./images/footer-brand-1.png" alt="" />
            </li>
            <li>
              <img src="./images/footer-brand-2.png" alt="" />
            </li>
            <li>
              <img src="./images/footer-brand-3.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
