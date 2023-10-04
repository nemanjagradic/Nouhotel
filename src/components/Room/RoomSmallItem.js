import { Link } from "react-router-dom";
import classes from "./RoomSmallItem.module.css";

function RoomSmallItem({ room, curSlide, pixels }) {
  return (
    <div
      className={classes["room-small-item"]}
      style={{
        transform: `translateX(calc(${100 * curSlide}% - ${pixels}px))`,
      }}
    >
      <Link to={`/rooms/${room.id}`}>
        <div className={classes["room-img"]}>
          <img src={room.images[1]} alt="" />
        </div>
        <div className={classes["room-content"]}>
          <h4>{room.title}</h4>
          <h6>
            from <span>${room.price} / night</span>
          </h6>
        </div>
      </Link>
    </div>
  );
}

export default RoomSmallItem;
