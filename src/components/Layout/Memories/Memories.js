import Button from "../../../UI/Button";
import classes from "./Memories.module.css";
import gridCircle from "../../../svg/memories-circle.svg";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../store/searchSlice";
import { useNavigate } from "react-router-dom";

function Memories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchAll = true;
  const searchAllHandler = () => {
    dispatch(searchActions.filterRooms(searchAll));
    navigate("/search-result");
  };
  return (
    <div className={classes.memories}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className={`col-md-5 ${classes["memories-col-content"]}`}>
            <h2>Make your golden memories</h2>
            <h5>A refined luxury hotel in the famed oasis of city</h5>
            <p>
              A 5-star hotel located near the airport and railway station; steps
              away from tourist sites like cave, hotel is ideal for leisure and
              business alike. Decorated with contemporary art featuring rooms
              and suites offering a view of the city skyline and the vast oasis;
              our huge ballroom and meeting spaces are ideal for business, and
              weddings.
            </p>
            <Button
              background="transparent"
              border="1px solid rgba(0,0,0,1)"
              color="#000"
              text="Book Your Stay"
              onClick={searchAllHandler}
            />
          </div>
          <div className={`col-md-6 ${classes["memories-col"]}`}>
            <div className={`${classes["grid-container"]}`}>
              <div className={classes["grid-circle-img"]}>
                <img src={gridCircle} alt="" />
              </div>
              <div
                className={`${classes["grid-item"]} ${classes["w-1"]} ${classes["h-2"]}`}
              >
                <img src="./images/memories-1.jpg" alt="" />
              </div>
              <div
                className={`${classes["grid-item"]} ${classes["w-1"]} ${classes["h-1"]}`}
              >
                <img src="./images/memories-2.jpg" alt="" />
              </div>
              <div
                className={`${classes["grid-item"]} ${classes["w-1"]} ${classes["h-1"]}`}
              >
                <img src="./images/memories-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memories;
