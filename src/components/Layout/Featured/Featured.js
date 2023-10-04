import classes from "./Featured.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import parkingCar from "../../../svg/parking-car.svg";
import wifi from "../../../svg/wifi-modem.svg";
import breakfast from "../../../svg/breakfast-svgrepo-com.svg";
import reservation from "../../../svg/customer-service.svg";

function Featured() {
  const amenities = [
    {
      title: "Infinity Pool",
      desc: "We offer a swimming experience fully catered to different categories of resord quests, from families with children through to independent travellers and couples looking to relax away from the crowds.",
      img: "./images/amenties-carousel-1.jpg",
    },
    {
      title: "Fitness Center",
      desc: "We offer a swimming experience fully catered to different categories of resord quests, from families with children through to independent travellers and couples looking to relax away from the crowds.",
      img: "./images/amenties-carousel-2.jpg",
    },
    {
      title: "Meeting Room",
      desc: "We offer a swimming experience fully catered to different categories of resord quests, from families with children through to independent travellers and couples looking to relax away from the crowds.",
      img: "./images/amenties-carousel-3.jpg",
    },
    {
      title: "Spa & Wellness",
      desc: "We offer a swimming experience fully catered to different categories of resord quests, from families with children through to independent travellers and couples looking to relax away from the crowds.",
      img: "./images/amenties-carousel-4.jpg",
    },
  ];
  const [curSlide, setCurSlide] = useState(0);
  const [pixels, setPixels] = useState(0);
  const [active, setActive] = useState(0);

  const moveTo = (i) => {
    setCurSlide(i);
    setPixels(i * 25);
    setActive(i);
  };
  return (
    <div className={classes.featured}>
      <div className={classes["featured-responsive"]}>
        <h2>Featured Amenities</h2>
        <h6>Inspired Inchentives</h6>
        <div className={classes["featured-items"]}>
          {amenities.map((amenity, i) => {
            return (
              <div
                key={i}
                className={classes["featured-item"]}
                style={{
                  transform: `translateX(calc(-${
                    100 * curSlide
                  }% - ${pixels}px))`,
                }}
              >
                <div className={classes["featured-item-content"]}>
                  <div className={classes["featured-item-content-box"]}>
                    <h3>{amenity.title}</h3>
                    <p>{amenity.desc}</p>
                  </div>
                </div>
                <div className={classes["featured-item-image"]}>
                  <img src={amenity.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes["featured-circles"]}>
          {amenities.map((_, i) => {
            return (
              <FontAwesomeIcon
                key={i}
                icon={faCircle}
                onClick={moveTo.bind(null, i)}
                className={active === i ? classes["active-circle"] : ""}
              />
            );
          })}
        </div>
      </div>
      <div className={classes["featured-row"]}>
        <div className={classes["featured-img-1"]}>
          <img src="./images/amenties-1.jpg" alt="" />
        </div>
        <div className={`col-md-6 ${classes["featured-col-content"]}`}>
          <h2>Featured Amenities</h2>
          <h6>Inspired Inchentives</h6>
          <div className={classes["featured-items"]}>
            {amenities.map((amenity, i) => {
              return (
                <div
                  key={i}
                  className={classes["featured-item"]}
                  style={{
                    transform: `translateX(calc(-${
                      100 * curSlide
                    }% - ${pixels}px))`,
                  }}
                >
                  <div className={classes["featured-item-content"]}>
                    <div className={classes["featured-item-content-box"]}>
                      <h3>{amenity.title}</h3>
                      <p>{amenity.desc}</p>
                    </div>
                  </div>
                  <div className={classes["featured-item-image"]}>
                    <img src={amenity.img} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes["featured-circles"]}>
            {amenities.map((_, i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faCircle}
                  onClick={moveTo.bind(null, i)}
                  className={active === i ? classes["active-circle"] : ""}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes["featured-row-2"]}>
        <div className={`col-md-6 ${classes["featured-col-2"]}`}>
          <div className={classes["some-amenties-items"]}>
            <div className={classes["some-amenties-item"]}>
              <div className={classes["some-amenties-item-img"]}>
                <img src={parkingCar} alt="" />
              </div>
              <div className={classes["some-amenties-item-content"]}>
                <h5>Free Parking</h5>
                <p>All complimentary parking is subject to availability.</p>
              </div>
            </div>
            <div className={classes["some-amenties-item"]}>
              <div className={classes["some-amenties-item-img"]}>
                <img src={wifi} alt="" />
              </div>
              <div className={classes["some-amenties-item-content"]}>
                <h5>High Speed Wifi</h5>
                <p>Free Wi-Fi in all the rooms and common areas</p>
              </div>
            </div>
            <div className={classes["some-amenties-item"]}>
              <div className={classes["some-amenties-item-img"]}>
                <img src={breakfast} alt="" />
              </div>
              <div className={classes["some-amenties-item-content"]}>
                <h5>Breakfast Included</h5>
                <p>We have the fuel to start your day right.</p>
              </div>
            </div>
            <div className={classes["some-amenties-item"]}>
              <div className={classes["some-amenties-item-img"]}>
                <img src={reservation} alt="" />
              </div>
              <div className={classes["some-amenties-item-content"]}>
                <h5>Reservations 24/7</h5>
                <p>
                  With our service you may enjoy the finest life in our resort.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["featured-img-2"]}>
          <img src="./images/amenties-2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
