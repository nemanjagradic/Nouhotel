import { Link } from "react-router-dom";
import classes from "./ExclusiveOffersItem.module.css";

const ExclusiveOffersItem = ({ offer }) => {
  return (
    <div className={`${classes["exclusive-offers-col"]}`}>
      <div className={classes["exclusive-offers-item"]}>
        <div className={classes["exclusive-offers-item-image"]}>
          <img src={offer.image} alt="" />
        </div>
        <div className={classes["exclusive-offers-item-content"]}>
          <Link to={`/offers/${offer.id}`}>
            <h5>{offer.title}</h5>
          </Link>
          <span>
            Available: {offer.available[0]} - {offer.available[1]}
          </span>
          <p>
            Extend and elevate your stay with exclusive privileges at our
            Hotels.
          </p>
          <Link to={`/offers/${offer.id}`}>
            <button className={classes["exclusive-offers-btn"]}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffersItem;
