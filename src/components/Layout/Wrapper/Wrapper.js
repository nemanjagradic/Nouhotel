import classes from "./Wrapper.module.css";
import wrapperLogo from "../../../svg/logo-2.svg";
import { useEffect, useRef, useState } from "react";
import WrapperForm from "./WrapperForm";
import useStickyNav from "../../../hooks/useStickyNav";
import { motion } from "framer-motion";

const images = [
  "./images/wrapper-1.jpg",
  "./images/wrapper-2.jpg",
  "./images/wrapper-3.jpg",
];

function Wrapper() {
  const wraperEl = useRef();
  useStickyNav(wraperEl.current, { root: null, threshold: 0 });

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.wrapper} ref={wraperEl}>
      <div
        className={classes["wrapper-image"]}
        style={{ position: "relative" }}
      >
        {images.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            initial={{ scale: 1, opacity: index === imgIndex ? 1 : 0 }}
            animate={{
              opacity: index === imgIndex ? 1 : 0,
              scale: index === imgIndex ? [1, 1.04] : 1,
            }}
            transition={{
              scale: {
                duration: 5,
              },
              opacity: { duration: 1 },
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}

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
