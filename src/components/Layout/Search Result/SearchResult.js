import CurrentUrl from "../../../UI/CurrentUrl";
import classes from "./SearchResult.module.css";
import RoomSmallItem from "../../Room/RoomSmallItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { searchActions } from "../../../store/searchSlice";
import { rooms } from "../../../store/searchSlice";
import BookingForm from "../../../UI/BookingForm";
import { Link } from "react-router-dom";
import useStickyNav from "../../../hooks/useStickyNav";
/* eslint-disable no-unused-vars */

function SearchResult() {
  const searchRef = useRef();
  const [runAgain, setRunAgain] = useState(false);
  useStickyNav(searchRef.current, { root: null, threshold: 0 });
  useEffect(() => {
    setRunAgain(true);
  }, []);
  const dispatch = useDispatch();
  const filteredRooms = useSelector((state) => state.filteredRooms);
  const bookingValues = useSelector((state) => state.bookingValues);

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [minCheckOut, setMinCheckOut] = useState(null);
  const [maxCheckOut, setMaxCheckOut] = useState(null);
  const [adult, setAdult] = useState(bookingValues[2]?.value || "");
  const [children, setChildren] = useState(bookingValues[3]?.value || "");

  const handleCheckIn = (date) => {
    setCheckIn(date);
    const newMinCheckOut = new Date(date);
    const newMaxCheckOut = new Date(date);
    newMinCheckOut.setDate(newMinCheckOut.getDate() + 3);
    newMaxCheckOut.setDate(newMaxCheckOut.getDate() + 20);
    setMinCheckOut(newMinCheckOut);
    setMaxCheckOut(newMaxCheckOut);
  };

  const handleCheckOut = (date) => {
    setCheckOut(date);
  };

  useEffect(() => {
    if (adult === 0) {
      setChildren(0);
      dispatch(searchActions.resetChildrenAndAdult());
    }
  }, [adult, children, dispatch]);

  useEffect(() => {
    localStorage.setItem("filteredRooms", JSON.stringify(filteredRooms));
    localStorage.setItem("bookingValues", JSON.stringify(bookingValues));
  }, [filteredRooms, bookingValues]);

  const submitHandler = (e) => {
    e.preventDefault();
    const book = {
      checkIn: checkIn.getTime(),
      checkOut: checkOut.getTime(),
      adult,
      children,
    };
    dispatch(searchActions.filterRooms(book));
  };

  function formatDate(date) {
    const fullDate = new Date(date);
    const year = fullDate.getFullYear();
    const month = String(fullDate.getMonth() + 1).padStart(2, "0");
    const day = String(fullDate.getDate()).padStart(2, "0");
    return `${month}/${day}/${year}`;
  }

  return (
    <>
      <CurrentUrl />
      <div className="container">
        <div className={classes["search-row"]}>
          <div className={classes["search-result"]}>
            <div ref={searchRef} className={classes["search-item-number"]}>
              <p>
                <span>{filteredRooms.length}</span> Rooms
              </p>
            </div>
            <div className={classes["search-result-items"]}>
              {filteredRooms.map((room) => {
                return <RoomSmallItem key={room.id} room={room} />;
              })}
            </div>
          </div>
          <div className={classes["search-form-col"]}>
            <BookingForm
              data={{
                title: "Reservation",
                buttonText: "Check Availability",
                submitHandler: submitHandler,
                checkIn: checkIn,
                handleCheckIn: handleCheckIn,
                placeholderCheckIn: bookingValues[0]
                  ? formatDate(bookingValues[0].value)
                  : "Check In",
                minCheckIn: new Date(),
                maxCheckIn: new Date("2023-12-31"),
                checkOut: checkOut,
                handleCheckOut: handleCheckOut,
                placeholderCheckOut: bookingValues[1]
                  ? formatDate(bookingValues[1].value)
                  : "Check Out",
                minCheckOut: minCheckOut,
                maxCheckOut: maxCheckOut,
                adultValue: adult,
                changeAdult: (e) => setAdult(parseInt(e.target.value)),
                childrenValue: children,
                changeChildren: (e) => setChildren(parseInt(e.target.value)),
              }}
            />
            <div className={classes["popular-rooms"]}>
              <h4>Popular Rooms</h4>
              {rooms.slice(7, 10).map((room) => {
                return (
                  <div key={room.id} className={classes["popular-room"]}>
                    <div className={classes["popular-room-img"]}>
                      <Link to={`/rooms/${room.id}`}>
                        <img src={room.images[0]} alt="" />
                      </Link>
                    </div>
                    <div className={classes["popular-room-content"]}>
                      <Link to={`/rooms/${room.id}`}>
                        <h6>{room.title}</h6>
                      </Link>
                      <p>
                        from <span>${room.price} / night</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
