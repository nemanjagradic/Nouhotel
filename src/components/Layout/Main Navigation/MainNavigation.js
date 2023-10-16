import { useDispatch } from "react-redux";
import Button from "../../../UI/Button";
import logoSvg from "../../../svg/logo.svg";
import classes from "./MainNavigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { searchActions } from "../../../store/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faCalendarPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function MainNavigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchAll = true;
  const searchHandler = () => {
    dispatch(searchActions.filterRooms(searchAll));
    navigate("/search-result");
  };
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    setShowNav(true);
  };
  const hideNavHandler = () => {
    setShowNav(false);
  };
  return (
    <>
      <div className={classes["responsive-nav"]}>
        <div className={classes.menu} onClick={showNavHandler}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
        <div className={classes["nav-col-logo"]}>
          <Link to="">
            <img src={logoSvg} alt="Logo" />
          </Link>
        </div>
        <div className={classes["nav-col-small"]} onClick={searchHandler}>
          <FontAwesomeIcon icon={faCalendarPlus} />
        </div>
      </div>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className={classes["nav-list-responsive"]}
            initial={{ x: -500, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul>
              <li className={classes["nav-col-logo"]}>
                <Link to="">
                  <img src={logoSvg} alt="Logo" />
                </Link>
              </li>
              <li className={classes.close} onClick={hideNavHandler}>
                <FontAwesomeIcon icon={faXmark} />
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="offers">Offers</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className={classes.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={hideNavHandler}
          ></motion.div>
        )}
      </AnimatePresence>

      <div className={classes.nav} style={{ position: "relative" }}>
        <nav>
          <div className={classes["nav-col-logo"]}>
            <Link to="">
              <img src={logoSvg} alt="Logo" />
            </Link>
          </div>
          <div className={classes["nav-col-main"]}>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="offers">Offers</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={classes["nav-col-small"]}>
            <Button
              onClick={searchHandler}
              background="#9b9183"
              color="#fff"
              text="Book Your Stay"
            />
          </div>
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
