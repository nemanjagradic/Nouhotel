import classes from "./Discover.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { rooms } from "../../../store/searchSlice";
import RoomSmallItem from "../../Room/RoomSmallItem";
import { useState } from "react";
import Headline from "../../../UI/Headline";

function Discover() {
  const [curSlide, setCurSlide] = useState(0);
  const [pixels, setPixels] = useState(0);

  const nextSlide = () => {
    if (curSlide === -4) {
      setCurSlide(0);
      setPixels(0);
    } else {
      setCurSlide((prevSlide) => prevSlide - 1);
      setPixels((prevPixels) => prevPixels + 18);
    }
  };
  const prevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(-4);
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
