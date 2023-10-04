import classes from "./ExclusiveOffers.module.css";
import Button from "../../../../UI/Button";
import offersSvg from "../../../../svg/exc-offers.svg";
import ExclusiveOffersItem from "./ExclusiveOffersItem";
import { Link } from "react-router-dom";
import { offers } from "../Offers Page Content/OffersContent";

function ExclusiveOffers() {
  return (
    <div className={classes["exclusive-offers"]}>
      <div className="container">
        <div className={`d-flex ${classes["exclusive-offers-row"]}`}>
          <div
            className={`${classes["exclusive-offers-col"]}`}
            style={{ textAlign: "center" }}
          >
            <span className={classes["exc-offers-img1"]}>
              <img src={offersSvg} alt="" />
            </span>
            <span className={classes["exc-offers-img2"]}>
              <img src={offersSvg} alt="" />
            </span>
            <div className={classes["exclusive-offers-content"]}>
              <h3>Exclusive Offers</h3>
              <h6>Latest Offer & Packages</h6>
              <Link to="/offers">
                <Button
                  background="transparent"
                  border="1px solid rgba(0,0,0,1)"
                  color="#000"
                  text="Discover More"
                />
              </Link>
            </div>
          </div>
          {offers.slice(0, 2).map((offer) => {
            return <ExclusiveOffersItem key={offer.id} offer={offer} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ExclusiveOffers;
