import React, { useState, useEffect, useRef } from "react";
import classes from "./NumberAnimation.module.css";

const NumberAnimation = ({ targetNumber, duration, thousand }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const numberStatRef = useRef(null);

  useEffect(() => {
    const frames = (duration / 1000) * 40;
    const incrementPerFrame = targetNumber / frames;

    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        const animate = () => {
          setCurrentNumber((prevNumber) => {
            const newNumber = prevNumber + incrementPerFrame;
            if (newNumber >= targetNumber) return targetNumber;
            return newNumber;
          });

          requestAnimationFrame(animate);
        };

        animate();
      }
    }, options);

    if (numberStatRef.current) {
      observer.observe(numberStatRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [currentNumber, targetNumber, duration]);

  const formattedNumber = thousand
    ? Math.round(currentNumber).toLocaleString() + "k"
    : Math.round(currentNumber).toLocaleString();

  return (
    <span
      className={`${classes.number} ${
        targetNumber !== currentNumber ? classes.animate : ""
      }`}
      ref={numberStatRef}
    >
      {formattedNumber}
    </span>
  );
};

export default NumberAnimation;
