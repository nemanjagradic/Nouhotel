import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrentUrl from "../../../UI/CurrentUrl";
import Headline from "../../../UI/Headline";
import classes from "./ContactContent.module.css";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../../../UI/Button";
import useInput from "../../../hooks/useInput";
import { useEffect, useRef, useState } from "react";
import useStickyNav from "../../../hooks/useStickyNav";
/* eslint-disable no-unused-vars */

function ContactContent() {
  const contactRow = useRef();
  const [runAgain, setRunAgain] = useState(false);
  useStickyNav(contactRow.current, { root: null, threshold: 0 });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRunAgain(true);
  }, []);
  const {
    enteredValue: enteredMessage,
    changeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    enteredValueIsValid: messageIsValid,
    enteredValueIsInvalid: messageIsInvalid,
    reset: resetMessage,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredName,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    enteredValueIsValid: nameIsValid,
    enteredValueIsInvalid: nameIsInvalid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    enteredValueIsValid: emailIsValid,
    enteredValueIsInvalid: emailIsInvalid,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (messageIsValid && nameIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    const questionData = {
      enteredMessage,
      enteredName,
      enteredEmail,
    };
    console.log(questionData);

    resetMessage();
    resetName();
    resetEmail();
  };

  return (
    <>
      <CurrentUrl />
      <div className={classes["contact-header"]}>
        <Headline
          title="Get In Touch"
          smallTitle="We are at your disposal 7 days a week!"
        />
        <div
          ref={contactRow}
          className="d-flex justify-content-center align-items-center flex-wrap"
        >
          <div className={classes["contect-header-col"]}>
            <h6>Address</h6>
            <p>972 Westheimer Rd. Santa Ana,Illinois, USA</p>
          </div>
          <div className={classes["contect-header-col"]}>
            <h6>Write us</h6>
            <p>
              email.info@example.com <br></br>support@example.com
            </p>
          </div>
          <div className={classes["contect-header-col"]}>
            <h6>Phone</h6>
            <p>
              1-800-123-4567<br></br>1-800-666-3355
            </p>
          </div>
        </div>
      </div>
      <div className={classes["contact-map"]}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1695327757190!5m2!1sen!2sus"
        ></iframe>
      </div>
      <div className={classes["contact-form-section"]}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className={classes["contact-form-col"]}>
              <h1>Do you have any question</h1>
              <h5>We here to help.</h5>
              <p>
                Please contact our reservations offices worldwide for queries
                about reservations or for more information about our
                experiences.
              </p>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className={classes["contact-form-col"]}>
              <form
                onSubmit={submitHandler}
                className={classes["contact-form"]}
              >
                <div className={classes["contact-form-field"]}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    onChange={messageChangeHandler}
                    onBlur={messageBlurHandler}
                    value={enteredMessage}
                  ></textarea>
                  {messageIsInvalid && (
                    <p className={classes.error}>Please fill out this field.</p>
                  )}
                </div>
                <div className={classes["contact-form-field"]}>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    name="name"
                    onBlur={nameBlurHandler}
                    onChange={nameChangeHandler}
                    value={enteredName}
                  />
                  {nameIsInvalid && (
                    <p className={classes.error}>Please fill out this field.</p>
                  )}
                </div>
                <div className={classes["contact-form-field"]}>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    name="email"
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                  />
                  {emailIsInvalid && (
                    <p className={classes.error}>Please fill out this field.</p>
                  )}
                </div>
                <Button
                  styles={{
                    width: "130px",
                    background: "#9b9183",
                    color: "#fff",
                    margin: "30px 0 0 0",
                  }}
                  disabled={!formIsValid}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactContent;
