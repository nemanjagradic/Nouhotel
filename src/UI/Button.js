import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      style={{
        background: props.background,
        color: props.color,
        border: props.border,
        width: props.width,
        margin: props.margin,
      }}
      className={classes.btn}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
