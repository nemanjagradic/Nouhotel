import classes from "./BookingForm.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm({ data }) {
  return (
    <form onSubmit={data.submitHandler} className={classes["booking-form"]}>
      <div className={classes["booking-form-content"]}>
        <h4>{data.title}</h4>
        <div className={classes["booking-field-date"]}>
          <label htmlFor="checkIn">Check In</label>
          <DatePicker
            name="checkIn"
            selected={data.checkIn}
            onChange={data.handleCheckIn}
            placeholderText={data.placeholderCheckIn}
            minDate={data.minCheckIn}
            maxDate={data.maxCheckIn}
          />
          <span className={classes["fa-icon"]}>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
        </div>
        <div className={classes["booking-field-date"]}>
          <label htmlFor="checkOut">Check Out</label>
          <DatePicker
            name="checkOut"
            selected={data.checkOut}
            onChange={data.handleCheckOut}
            placeholderText={data.placeholderCheckOut}
            minDate={data.minCheckOut}
            maxDate={data.maxCheckOut}
            disabled={!data.checkIn}
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
            max={6 - data.childrenValue}
            step="1"
            value={data.adultValue ? data.adultValue : ""}
            placeholder={
              data.adultValue > 0
                ? data.adultValue
                : "please, select date first"
            }
            onChange={data.changeAdult}
            disabled={!data.checkIn || !data.checkOut}
          />
        </div>
        <div className={classes["booking-field-people"]}>
          <label htmlFor="children">Children</label>
          <input
            name="children"
            type="number"
            min="0"
            max={6 - data.adultValue}
            step="1"
            value={data.adultValue ? data.childrenValue : ""}
            placeholder={
              data.childrenValue > 0
                ? data.childrenValue
                : "please, select date first"
            }
            onChange={data.changeChildren}
            disabled={!data.checkIn || !data.checkOut || data.adultValue < 1}
          />
        </div>
        {data.roomItem &&
          data.checkIn &&
          data.checkOut &&
          data.adultValue >= 1 && (
            <div className={classes["room-total"]}>
              <h5>Total</h5>
              <span>${data.total}</span>
            </div>
          )}
        <div className={classes["booking-field-submit"]}>
          <Button
            disabled={!data.checkIn || !data.checkOut || data.adultValue < 1}
            type="submit"
            color="#fff"
            background="#9b9183"
            text={data.buttonText}
            width="100%"
          ></Button>
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
