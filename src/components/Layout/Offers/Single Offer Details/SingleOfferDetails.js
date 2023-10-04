import CurrentUrl from "../../../../UI/CurrentUrl";
import classes from "./SingleOfferDetails.module.css";
import { offers } from "../Offers Page Content/OffersContent";
import ExclusiveOffersItem from "../Exclusive Offers/ExclusiveOffersItem";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useStickyNav from "../../../../hooks/useStickyNav";
/* eslint-disable no-unused-vars */

const SingleOfferDetails = ({ offer }) => {
  const offerRef = useRef();
  const [runAgain, setRunAgain] = useState(false);
  useStickyNav(offerRef.current, { root: null, threshold: 0 });

  const { title, image, available } = offer;
  const { offerId } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRunAgain(true);
  }, [offerId]);

  return (
    <>
      <CurrentUrl />
      <div className={classes["offer-container"]}>
        <div className={classes["offer-header"]}>
          <h1>{title}</h1>
          <p ref={offerRef} className={classes["offer-available"]}>
            Available: {available[0]} - {available[1]}
          </p>
        </div>
      </div>
      <div className={classes["offer-header-img"]}>
        <img src={image} alt="" />
      </div>
      <div className={classes["offer-container"]}>
        <p>
          Good things come to those who plan! Book your luxurious Sydney getaway
          early and be rewarded with up to 15% off our Best Available Rate*.
        </p>
        <h6>This offer includes:</h6>
        <ul className={classes["offer-list"]}>
          <li>Round-trip airport transfers in a 4-seater sedan</li>
          <li>
            Daily breakfast for two adults and up to a maximum of two children
            (11 years old and under)
          </li>
          <li>Daily lunch credit of FJD 50 (including tax) per adult</li>
          <li>
            Daily buffet dinner for 2 adults served at the Lagoon Terrace
            Restaurant OR Dinner credit of FJD 95 (including tax) per adult
            outside of the Lagoon Terrace including theme nights / shows at the
            Marau Village.
          </li>
          <li>
            Daily beverage package for two adults which includes unlimited
            drinks from a select menu between 12 noon until 10 PM
          </li>
          <li>
            Access to floating water park activities and Little Chiefs Club (For
            children aged 4-11 years)
          </li>
        </ul>
        <p>
          Book direct on our website or mobile app to be eligible to earn and
          redeem Points and enjoy extra member privileges. Join now.
        </p>
      </div>
      <div className={classes["offers-terms"]}>
        <h6>Terms And Conditions</h6>
        <ul className={classes["offer-list"]}>
          <li>
            This offer is applicable from 3rd April 2024 - 31st March 2025.
          </li>
          <li>Blackout dates apply.</li>
          <li>
            A minimum of 5 consecutive nights is required to book this offer.
            Rates are subject to availability at the time of booking.
          </li>
          <li>
            Room confirmation is subject to availability at the time of booking.
          </li>
          <li>
            Room rates are subject to prevailing service charges and applicable
            tax.
          </li>
          <li>Credit cards will incur a surcharge of 3% upon check out.</li>
          <li>
            The offer qualifies for earning Shangri-La Circle Points. Terms and
            conditions of the Shangri-La Circle programme apply.
          </li>
          <li>Offer cannot be availed in conjunction with other</li>
        </ul>
      </div>
      <div className="container">
        <h2 className={classes["recommended-offers-title"]}>
          Recommended Offers
        </h2>
        <div className={`row ${classes["offers-row"]}`}>
          {offers.slice(3, 6).map((offer) => {
            return <ExclusiveOffersItem key={offer.id} offer={offer} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SingleOfferDetails;
