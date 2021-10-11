import React, {
  useState,
  useEffect,
} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Tour = ({
  image,
  id,
  info,
  price,
  name,
  removeTour,
}) => {
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div data-aos="zoom-in">
      <article className="single-tour">
        <img src={image} alt={name} />

        <footer>
          <div className="tour_info">
            <h4>{name}</h4>
            <h4 className="tour-price">
              ${price}
            </h4>
          </div>
          <p>
            {readMore
              ? info
              : `${info.substring(0, 200)}...`}
            <button
              onClick={() =>
                setReadMore(!readMore)
              }
            >
              {readMore
                ? "Show Less"
                : "Read More"}
            </button>
          </p>
          <button
            className="delete-btn"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </footer>
      </article>
    </div>
  );
};

export default Tour;
