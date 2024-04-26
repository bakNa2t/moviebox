import { useState } from "react";

import RatingIcon from "./RatingIcon";

import PropTypes from "prop-types";

import styles from "./Rating.module.css";

function Rating({ maxRating, color, size, onSetRating }) {
  Rating.propTypes = {
    maxRating: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    onSetRating: PropTypes.func,
  };

  const [rating, setRating] = useState("");
  const [tempRating, setTempRating] = useState(0);

  const text = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div className={styles.rating}>
      <div className={styles["rating-icon"]}>
        {Array.from({ length: maxRating }, (_, i) => (
          <RatingIcon
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={text}>{tempRating || rating || ""}</p>
    </div>
  );
}

export default Rating;
