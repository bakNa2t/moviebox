import { useState } from "react";

import RatingIcon from "./RatingIcon";

import PropTypes from "prop-types";

function Raiting({ maxRating = 5, color = "#fcc419", size = 24 }) {
  Raiting.propTypes = {
    maxRating: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const text = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div>
      <div>
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
      <p className={text}>{tempRating || rating || ""}</p>
    </div>
  );
}

export default Raiting;
