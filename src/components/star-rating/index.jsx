import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

function StarRating({ starNumber }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState("inactive");

  let vary = [...Array(starNumber)];

  //   console.log(starNumber);
  //   console.log(Array(starNumber));
  //   console.log(...Array(starNumber));
  //   console.log(vary);

  function handleStarClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleStarHover(currentIndex) {
    setHover(currentIndex);
  }

  function handleStarLeave() {
    setHover(rating);
  }

  return (
    <div>
      {vary.map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={() => handleStarLeave()}
            size={30}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
