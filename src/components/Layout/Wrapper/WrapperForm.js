import classes from "./WrapperForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../store/searchSlice";

function WrapperForm() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const dispatch = useDispatch();

  const handleCheckIn = (date) => {
    setCheckIn(date);
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const book = {
      checkIn: checkIn.getTime(),
      checkOut: checkOut.getTime(),
      adult,
      children,
    };
    dispatch(searchActions.filterRooms(book));
    navigate("search-result");
  };

  return (
    <>
      <form
        className={classes["wrapper-form-responsive"]}
        onSubmit={submitHandler}
      >
        <div className={`${classes["form-field-date"]} ${classes["w-3"]}`}>
          <label htmlFor="checkIn">Check In</label>
          <DatePicker
            selected={checkIn}
            onChange={handleCheckIn}
            placeholderText="Select Date"
            name="checkIn"
            minDate={new Date()}
            maxDate={new Date("2024-02-28")}
          />
          <span className={classes["fa-icon"]}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
        <div className={`${classes["form-field-date"]} ${classes["w-3"]}`}>
          <label htmlFor="checkOut">Check Out</label>
          <DatePicker
            selected={checkOut}
            onChange={handleCheckOut}
            placeholderText="Select Date"
            name="checkOut"
            minDate={checkIn}
            maxDate={new Date("2024-02-28")}
            disabled={!checkIn}
          />
          <span className={classes["fa-icon-2"]}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
        <div
          className={`${classes["form-field-submit"]} ${classes["h-2"]} ${classes["w-2"]}`}
        >
          <button disabled={!checkIn || !checkOut || adult < 1} type="submit">
            Check<br></br>availability
          </button>
        </div>
        <div className={`${classes["form-field-people"]} ${classes["w-3"]}`}>
          <label htmlFor="adult">Adult</label>
          <input
            type="number"
            min="0"
            max={6 - children}
            step="1"
            value={adult}
            onChange={(e) => setAdult(e.target.value)}
          />
        </div>
        <div className={`${classes["form-field-people"]} ${classes["w-3"]}`}>
          <label htmlFor="children">Children</label>
          <input
            type="number"
            min="0"
            max={6 - adult}
            step="1"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            disabled={adult < 1}
          />
        </div>
      </form>
      <form className={classes["wrapper-form"]} onSubmit={submitHandler}>
        <div className={classes["form-field-date"]}>
          <label htmlFor="checkIn">Check In</label>
          <DatePicker
            selected={checkIn}
            onChange={handleCheckIn}
            placeholderText="Select Date"
            name="checkIn"
            minDate={new Date()}
            maxDate={new Date("2024-02-28")}
          />
          <span className={classes["fa-icon"]}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
        <div className={classes["form-field-date"]}>
          <label htmlFor="checkOut">Check Out</label>
          <DatePicker
            selected={checkOut}
            onChange={handleCheckOut}
            placeholderText="Select Date"
            name="checkOut"
            minDate={checkIn}
            maxDate={new Date("2024-02-28")}
            disabled={!checkIn}
          />
          <span className={classes["fa-icon-2"]}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
        <div className={classes["form-field-people"]}>
          <label htmlFor="adult">Adult</label>
          <input
            type="number"
            min="0"
            max={6 - children}
            step="1"
            value={adult}
            onChange={(e) => setAdult(e.target.value)}
          />
        </div>
        <div className={classes["form-field-people"]}>
          <label htmlFor="children">Children</label>
          <input
            type="number"
            min="0"
            max={6 - adult}
            step="1"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            disabled={adult < 1}
          />
        </div>
        <div className={classes["form-field-submit"]}>
          <button disabled={!checkIn || !checkOut || adult < 1} type="submit">
            Check<br></br>availability
          </button>
        </div>
      </form>
    </>
  );
}

export default WrapperForm;
