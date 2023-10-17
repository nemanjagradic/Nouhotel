import CurrentUrl from "../../UI/CurrentUrl";
import classes from "./RoomItem.module.css";
import BookingForm from "../../UI/BookingForm";
import RoomSmallItem from "./RoomSmallItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSnowflake,
  faBathtub,
  faCocktail,
  faPaw,
  faTv,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { rooms } from "../../store/searchSlice";
import { useParams } from "react-router-dom";
import useStickyNav from "../../hooks/useStickyNav";
/* eslint-disable no-unused-vars */

function RoomItem({ currentRoom }) {
  const singleRoomRef = useRef();
  const [runAgain, setRunAgain] = useState(false);
  useStickyNav(singleRoomRef.current, { root: null, threshold: 0 });
  useEffect(() => {
    setRunAgain(true);
  }, []);

  const { amenities, available, images, price, title } = currentRoom;
  const [bigImage, setBigImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [minCheckOut, setMinCheckOut] = useState();
  const [maxCheckOut, setMaxCheckOut] = useState();
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCheckIn = (date) => {
    setCheckIn(date);
    const newMinCheckOut = new Date(date);
    newMinCheckOut.setDate(newMinCheckOut.getDate() + 3);
    setMinCheckOut(newMinCheckOut);

    const newMaxCheckOut = new Date(date);
    newMaxCheckOut.setDate(newMaxCheckOut.getDate() + 20);
    const twentyDays = 20 * 24 * 60 * 60 * 1000;
    if (date.getTime() + twentyDays > available[1]) {
      setMaxCheckOut(new Date(available[1]));
    }
    if (date.getTime() + twentyDays < available[1]) {
      setMaxCheckOut(newMaxCheckOut);
    }
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
  };

  const changeAdult = (e) => {
    setAdult(parseInt(e.target.value));
    if (adult === 0) setChildren(0);
  };

  const { roomId } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTotal(0);
    setAdult(0);
    setCheckIn(null);
    setCheckOut(null);
  }, [roomId]);

  useEffect(() => {
    const monthCheckIn = new Date(checkIn).getDate();
    const monthCheckOut = new Date(checkOut).getDate();
    console.log(new Date(checkIn).getMonth() + 1, monthCheckIn, monthCheckOut);
    let totalPrice;

    if (monthCheckIn < monthCheckOut) {
      totalPrice =
        (monthCheckOut - monthCheckIn) * (price * adult + price * children);
    }
    if (monthCheckIn > monthCheckOut) {
      const checkInTime = new Date(checkIn);
      const checkInYear = checkInTime.getFullYear();
      const checkInMonth = checkInTime.getMonth() + 1;
      const lastMonth = new Date(checkInYear, checkInMonth, 0);
      totalPrice =
        (lastMonth.getDate() - monthCheckIn + monthCheckOut) *
        (price * adult + price * children);
    }

    setTotal(totalPrice);
  }, [checkIn, checkOut, adult, children, available, price]);

  const submitHandler = (e) => {
    e.preventDefault();
    const book = {
      checkIn: checkIn.getTime(),
      checkOut: checkOut.getTime(),
      adult,
      children,
    };
    console.log(book);
  };

  const changeImg = (img, i) => {
    setBigImage(img);
    setActiveIndex(i);
  };
  const checkMiniBar = amenities.includes("Mini Bar");

  return (
    <>
      <CurrentUrl />
      <div className="container">
        <div className={classes["room-item-row"]}>
          <div className={classes["room-item-col"]}>
            <div className={classes["room-item"]}>
              <div className={classes["room-item-title-price"]}>
                <h1>{title}</h1>
                <p>
                  from <span>${price} / night</span>
                </p>
              </div>
              <div
                ref={singleRoomRef}
                className={classes["room-item-general-info"]}
              >
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faSnowflake} />
                    Air Conditioning
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBathtub} />
                    Bathroom
                  </li>
                  {checkMiniBar && (
                    <li>
                      <FontAwesomeIcon icon={faCocktail} />
                      Mini Bar
                    </li>
                  )}
                  <li>
                    <FontAwesomeIcon icon={faPaw} />
                    Pet Allowed
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faTv} />
                    TV
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faWifi} />
                    Wifi
                  </li>
                </ul>
              </div>
              <div className={classes["room-item-content"]}>
                <div className={classes["room-item-big-image"]}>
                  <img src={bigImage} alt="" />
                </div>
                <div className={classes["room-item-small-images"]}>
                  {images.map((img, i) => {
                    return (
                      <div key={i} className={classes["room-item-small-image"]}>
                        <img
                          src={img}
                          alt=""
                          onMouseEnter={changeImg.bind(null, img, i)}
                        />
                        {i !== activeIndex ? (
                          <div
                            className={classes["image-overlay"]}
                            onMouseEnter={changeImg.bind(null, img, i)}
                          ></div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className={classes["room-item-description"]}>
                  <h4>Description</h4>
                  <p>
                    All our Deluxe rooms have big windows to help you take a
                    broad view of the cityscape and nature. We offer bigger bed
                    and every bathroom has bathtub and shower, which brings
                    relaxation to you after a long day.<br></br>
                    <br></br>
                    Fast WIFI connection, satelite TV and international standard
                    electric socket are standard throughout Hotel. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.<br></br>
                    <br></br>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit
                  </p>
                </div>
                <div className={classes["room-item-amenities"]}>
                  <h4>In-room Amenities</h4>
                  <ul>
                    {amenities.map((amenity, i) => {
                      return <li key={i}>{amenity}</li>;
                    })}
                  </ul>
                </div>
                <div className={classes["room-item-rules"]}>
                  <h4>Room Rules</h4>
                  <div className={classes["room-item-checking"]}>
                    <div className={classes["room-item-check-in"]}>
                      <h6>Check-in</h6>
                      <ul>
                        <li>Check-in from 9:00 AM - anytime</li>
                        <li>Early check-in subject to availability</li>
                        <li>Minimum check-in age - 18</li>
                      </ul>
                    </div>
                    <div className={classes["room-item-check-out"]}>
                      <h6>Check-out</h6>
                      <ul>
                        <li>Check-out before noon</li>
                        <li>Express check-out</li>
                      </ul>
                    </div>
                  </div>
                  <h6>Special check-in instructions</h6>
                  <p>
                    Guests will receive an email 5 days before arrival with
                    check-in instructions; front desk staff will greet guests on
                    arrival For more details, please contact the property using
                    the information on the booking confirmation.
                  </p>
                  <h6>Trip grade: fitness level, medical and health</h6>
                  <p>
                    The 14-days Everest Base Camp Trek is challenging; but
                    rewarding. Anyone can accomplish this trek. However, a bit
                    of preparedness is vital to complete this challenging trip.
                  </p>
                  <h6>Children and extra beds </h6>
                  <p>
                    Children are welcome Kids stay free! Children stay free when
                    using existing bedding; children may not be eligible for
                    complimentary breakfast Rollaway/extra beds are available
                    for EUR 40.0 per day
                  </p>
                </div>
                <div className={classes["other-rooms"]}>
                  <h4>Other Rooms</h4>
                  <div className="d-flex justify-content-between flex-wrap">
                    {rooms.slice(7, 9).map((room) => {
                      return <RoomSmallItem key={room.id} room={room} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["room-form"]}>
            <BookingForm
              data={{
                title: "Book Your Room",
                buttonText: "Book Now",
                submitHandler: submitHandler,
                checkIn: checkIn,
                handleCheckIn: handleCheckIn,
                placeholderCheckIn: "Arrival Date",
                minCheckIn: new Date(available[0]),
                maxCheckIn: new Date(available[1]),
                checkOut: checkOut,
                handleCheckOut: handleCheckOut,
                placeholderCheckOut: "Deprature Date",
                minCheckOut: minCheckOut,
                maxCheckOut: maxCheckOut,
                adultValue: adult,
                changeAdult: changeAdult,
                childrenValue: children,
                changeChildren: (e) => setChildren(parseInt(e.target.value)),
                roomItem: true,
                total: total,
              }}
            />
          </div>
        </div>
        <div className={classes["room-form-responsive"]}>
          <BookingForm
            data={{
              title: "Book Your Room",
              buttonText: "Book Now",
              submitHandler: submitHandler,
              checkIn: checkIn,
              handleCheckIn: handleCheckIn,
              placeholderCheckIn: "Arrival Date",
              minCheckIn: new Date(available[0]),
              maxCheckIn: new Date(available[1]),
              checkOut: checkOut,
              handleCheckOut: handleCheckOut,
              placeholderCheckOut: "Deprature Date",
              minCheckOut: minCheckOut,
              maxCheckOut: maxCheckOut,
              adultValue: adult,
              changeAdult: changeAdult,
              childrenValue: children,
              changeChildren: (e) => setChildren(parseInt(e.target.value)),
              roomItem: true,
              total: total,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default RoomItem;
