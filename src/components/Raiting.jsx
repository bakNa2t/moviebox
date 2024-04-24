import { useState } from "react";

import RatingIcon from "./RatingIcon";

import PropTypes from "prop-types";

function Raiting({ maxRating = 5 }) {
  Raiting.propTypes = {
    maxRating: PropTypes.number.isRequired,
  };

  const [rating, setRating] = useState(0);

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
            full={rating >= i + 1}
          />
        ))}
      </div>
      <p>{rating || ""}</p>
    </div>
  );
}

export default Raiting;
