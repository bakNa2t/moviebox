// import { useState } from "react";

// import PropTypes from "prop-types";

// import styles from "./BoxWatched.module.css";
// import Summary from "./Summary";
// import MovieListWatched from "./MovieListWatched";

// function BoxWatched({ watched }) {
//   BoxWatched.propTypes = {
//     watched: PropTypes.array.isRequired,
//   };

//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className={styles.box}>
//       <button
//         className={styles["btn-toggle"]}
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <Summary watched={watched} />
//           <MovieListWatched watched={watched} />
//         </>
//       )}
//     </div>
//   );
// }

// export default BoxWatched;
