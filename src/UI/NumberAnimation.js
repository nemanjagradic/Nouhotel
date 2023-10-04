import React, { useState, useEffect, useRef } from "react";
import classes from "./NumberAnimation.module.css";

const NumberAnimation = ({ targetNumber, duration, thousand }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const aboutStatsRef = useRef(null);

  useEffect(() => {
    const frames = (duration / 1000) * 40;
    const incrementPerFrame = targetNumber / frames;

    const animate = () => {
      setCurrentNumber((prevNumber) => {
        const newNumber = prevNumber + incrementPerFrame;
        if (newNumber >= targetNumber) return targetNumber;
        return newNumber;
      });
    };

    const options = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const animationFrameId = requestAnimationFrame(animate);

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      }
    }, options);

    if (aboutStatsRef.current) {
      observer.observe(aboutStatsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [currentNumber, targetNumber, duration, thousand]);

  const formattedNumber = thousand
    ? Math.round(currentNumber).toLocaleString() + "k"
    : Math.floor(currentNumber).toLocaleString();

  return (
    <>
      {targetNumber !== currentNumber && (
        <span
          className={`${classes.number} ${classes.animate}`}
          ref={aboutStatsRef}
        >
          {formattedNumber}
        </span>
      )}
      {targetNumber === currentNumber && (
        <span className={classes.number}>{formattedNumber}</span>
      )}
    </>
  );
};

export default NumberAnimation;
