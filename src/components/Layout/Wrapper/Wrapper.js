import classes from "./Wrapper.module.css";
import wrapperLogo from "../../../svg/logo-2.svg";
import { useEffect, useRef, useState } from "react";
import WrapperForm from "./WrapperForm";
import useStickyNav from "../../../hooks/useStickyNav";
import { AnimatePresence, motion } from "framer-motion";
/* eslint-disable no-unused-vars */

const images = [
  "./images/wrapper-1.jpg",
  "./images/wrapper-2.jpg",
  "./images/wrapper-3.jpg",
];

function Wrapper() {
  const [runAgain, setRunAgain] = useState(false);
  useEffect(() => {
    setRunAgain(true);
  }, []);
  const wraperEl = useRef();
  useStickyNav(wraperEl.current, { root: null, threshold: 0 });

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevState) => {
        if (prevState === 2) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imgIndex]);

  return (
    <div className={classes.wrapper} ref={wraperEl}>
      <div className={classes["wrapper-image"]}>
        <AnimatePresence>
          <motion.img
            src={images[imgIndex]}
            animate={{
              scale: [1.04, 1],
              opacity: [0.9, 1, 1, 0.95],
              transition: { duration: 5, type: "just" },
            }}
            key={imgIndex}
          />
        </AnimatePresence>
        <div className={classes["wrapper-logo"]}>
          <img src={wrapperLogo} alt="" />
        </div>
        <div className={classes["wrapper-content"]}>
          <h4>Find your next beautiful holiday</h4>
          <h1>Award-winning resort in the paradise island</h1>
        </div>
      </div>

      <WrapperForm />
    </div>
  );
}

export default Wrapper;
