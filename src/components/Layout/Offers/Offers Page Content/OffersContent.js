import ExclusiveOffersItem from "../Exclusive Offers/ExclusiveOffersItem";
import classes from "./OffersContent.module.css";
import CurrentUrl from "../../../../UI/CurrentUrl";
import Headline from "../../../../UI/Headline";
import { useEffect, useRef, useState } from "react";
import useStickyNav from "../../../../hooks/useStickyNav";
/* eslint-disable no-unused-vars */

export const offers = [
  {
    id: 1,
    title: "Bed and Breakfast",
    image: "/images/breakfast-offer.jpg",
    available: ["October 17", "December 17"],
  },
  {
    id: 2,
    title: "Members Exclusive Rate",
    image: "/images/members-offer.jpg",
    available: ["October 17", "November 17"],
  },
  {
    id: 3,
    title: "Christmas Day Lunch",
    image: "/images/christmas-offer.jpg",
    available: ["October 1", "December 1"],
  },
  {
    id: 4,
    title: "International Buffet",
    image: "/images/buffet-offer.jpg",
    available: ["November 1", "December 15"],
  },
  {
    id: 5,
    title: "12 Nights Stay",
    image: "/images/12-offer.jpg",
    available: ["October 25", "November 25"],
  },
  {
    id: 6,
    title: "All-inclusive Island Escape",
    image: "/images/island-escape-offer.jpg",
    available: ["September 1", "December 15"],
  },
];

function OffersContent() {
  const [runAgain, setRunAgain] = useState(false);
  const headlineRef = useRef();
  useStickyNav(headlineRef.current, { root: null, threshold: 0 });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRunAgain(true);
  }, []);

  return (
    <>
      <CurrentUrl />
      <div className="container">
        <div className={classes["offer-content"]}>
          <Headline
            title="Featured Hotel Deals"
            smallTitle="Book yourself some sunshine"
            ref={headlineRef}
          />
          <div className={`row ${classes["offers-row"]}`}>
            {offers.map((offer) => {
              return <ExclusiveOffersItem key={offer.id} offer={offer} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default OffersContent;
