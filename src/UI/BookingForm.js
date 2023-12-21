import classes from "./BookingForm.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm({
  data: {
    submitHandler,
    title,
    checkIn,
    handleCheckIn,
    placeholderCheckIn,
    minCheckIn,
    maxCheckIn,
    checkOut,
    handleCheckOut,
    placeholderCheckOut,
    minCheckOut,
    maxCheckOut,
    adultValue,
    changeAdult,
    childrenValue,
    changeChildren,
    total,
    buttonText,
    roomItem,
  },
}) {
  return (
    <form onSubmit={submitHandler} className={classes["booking-form"]}>
      <div className={classes["booking-form-content"]}>
        <h4>{title}</h4>
        <div className={classes["booking-field-date"]}>
          <label htmlFor="checkIn">Check In</label>
          <DatePicker
            name="checkIn"
            selected={checkIn}
            onChange={handleCheckIn}
            placeholderText={placeholderCheckIn}
            minDate={minCheckIn}
            maxDate={maxCheckIn}
          />
          <span className={classes["fa-icon"]}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
        <div className={classes["booking-field-date"]}>
          <label htmlFor="checkOut">Check Out</label>
          <DatePicker
            name="checkOut"
            selected={checkOut}
            onChange={handleCheckOut}
            placeholderText={placeholderCheckOut}
            minDate={minCheckOut}
            maxDate={maxCheckOut}
            disabled={!checkIn}
          />
          <span className={classes["fa-icon-2"]}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
        <div className={classes["booking-field-people"]}>
          <label htmlFor="adult">Adult</label>
          <input
            name="adult"
            type="number"
            min="0"
            max={6 - childrenValue}
            step="1"
            value={adultValue ? adultValue : ""}
            placeholder="please, select date first"
            onChange={changeAdult}
            disabled={!checkIn || !checkOut}
          />
        </div>
        <div className={classes["booking-field-people"]}>
          <label htmlFor="children">Children</label>
          <input
            name="children"
            type="number"
            min="0"
            max={6 - adultValue}
            step="1"
            value={adultValue ? childrenValue : ""}
            placeholder="please, select date first"
            onChange={changeChildren}
            disabled={!checkIn || !checkOut || adultValue < 1}
          />
        </div>
        {roomItem && checkIn && checkOut && adultValue >= 1 && (
          <div className={classes["room-total"]}>
            <h5>Total</h5>
            <span>${total}</span>
          </div>
        )}
        <div className={classes["booking-field-submit"]}>
          <Button
            disabled={!checkIn || !checkOut || adultValue < 1}
            type="submit"
            styles={{
              color: "#fff",
              background: "#9b9183",
              width: "100%",
            }}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
