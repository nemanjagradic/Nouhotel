import classes from "./Headline.module.css";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const Headline = forwardRef(({ title, smallTitle }, ref) => {
  return (
    <div className={classes["headline-content"]}>
      <div className={classes["headline-icon"]}>
        <FontAwesomeIcon icon={faSun} />
      </div>
      <h1>{title}</h1>
      <h6 ref={ref}>{smallTitle}</h6>
    </div>
  );
});

export default Headline;
