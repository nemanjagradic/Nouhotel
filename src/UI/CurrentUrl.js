import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./CurrentUrl.module.css";
import { Link, useParams } from "react-router-dom";
import { rooms } from "../store/searchSlice";
import { offers } from "../components/Layout/Offers/Offers Page Content/OffersContent";

function CurrentUrl() {
  const currentURL = window.location.href;
  const formattedUrl = currentURL
    .split("/")
    .slice(3)
    .map((link) => link.replaceAll("-", " "));
  const lastIndex = formattedUrl.length - 1;
  const { roomId, offerId } = useParams();
  const currentRoom = rooms.find((room) => room.id === parseInt(roomId));
  const currentOffer = offers.find((offer) => offer.id === parseInt(offerId));

  return (
    <div className={classes["current-url-section"]}>
      <ul className={classes["current-url-list"]}>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <FontAwesomeIcon icon={faChevronRight} />
        {currentOffer && (
          <>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <FontAwesomeIcon icon={faChevronRight} />
            <li className={classes.active}>
              <span>{currentOffer.title}</span>
            </li>
          </>
        )}
        {currentRoom && (
          <>
            <li>
              <Link to="/search-result">Rooms</Link>
            </li>
            <FontAwesomeIcon icon={faChevronRight} />
            <li className={classes.active}>
              <span>{currentRoom.title}</span>
            </li>
          </>
        )}
        {!currentRoom &&
          !currentOffer &&
          formattedUrl.map((link, index) => {
            if (formattedUrl.length > 1 && index < lastIndex) {
              return (
                <li key={index}>
                  <span>{link}</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              );
            }
            return (
              <li key={index} className={classes.active}>
                {link}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CurrentUrl;
