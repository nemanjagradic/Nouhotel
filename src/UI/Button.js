import classes from "./Button.module.css";

function Button({ styles, type, disabled, onClick, children }) {
  return (
    <button
      style={styles}
      className={classes.btn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
