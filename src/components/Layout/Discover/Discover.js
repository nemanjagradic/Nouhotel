import classes from "./Discover.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { rooms } from "../../../store/searchSlice";
import RoomSmallItem from "../../Room/RoomSmallItem";
import { useState, useEffect } from "react";
import Headline from "../../../UI/Headline";

function Discover() {
  const [curSlide, setCurSlide] = useState(0);
  const [pixels, setPixels] = useState(0);
  const [responsiveIndex, setResponsiveIndex] = useState(window.innerWidth);

  const handleResize = () => {
    let i;
    if (window.innerWidth >= 870) {
      i = -4;
    } else if (window.innerWidth >= 750) {
      i = -5;
    } else {
      i = -6;
    }
    setResponsiveIndex(i);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (curSlide === responsiveIndex) {
      setCurSlide(0);
      setPixels(0);
    } else {
      setCurSlide((prevSlide) => prevSlide - 1);
      setPixels((prevPixels) => prevPixels + 18);
    }
  };
  const prevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(responsiveIndex);
      setPixels(72);
    } else {
      setCurSlide((prevSlide) => prevSlide + 1);
      setPixels((prevPixels) => prevPixels - 18);
    }
  };

  return (
    <div className={`container ${classes.discover}`}>
      <Headline
        title="Discover Our Rooms"
        smallTitle="acoomodation and comfort"
      />
      <div className={classes["arrow-left"]} onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className={classes["arrow-right"]} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className={classes["discover-items"]}>
        {rooms.slice(0, 7).map((room) => {
          return (
            <RoomSmallItem
              key={room.id}
              room={room}
              curSlide={curSlide}
              pixels={pixels}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Discover;
