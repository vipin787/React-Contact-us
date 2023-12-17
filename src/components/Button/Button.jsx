import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
    const { isOutline, icon, text, ...rest} = props
  console.log(props);
  return (
    <>
      <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.any.isRequired,
  icon: PropTypes.any,
  isOutline: PropTypes.boolean,
};

export default Button;
