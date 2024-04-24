import RatingIcon from "./RatingIcon";

import PropTypes from "prop-types";

function Raiting({ rating }) {
  Raiting.propTypes = {
    rating: PropTypes.number.isRequired,
  };

  return (
    <div>
      <div>
        {Array.from({ length: rating }, (_, i) => (
          <RatingIcon key={i} />
        ))}
      </div>
      <p>10</p>
    </div>
  );
}

export default Raiting;
