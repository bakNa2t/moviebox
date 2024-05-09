import PropTypes from "prop-types";

function Button({ children, className, onClick }) {
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
