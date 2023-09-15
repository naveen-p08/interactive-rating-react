import RatingForm from "./RatingForm";
import styles from "./Rating.module.css";
import PropTypes from "prop-types";

Rating.propTypes = {
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  rating: PropTypes.number,
};

function Rating({ handleClick, handleSubmit, rating }) {
  return (
    <div>
      <div className={styles.starimg_container}>
        <img src="/icon-star.svg" alt="star icon" aria-hidden={true} />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingForm
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        rating={rating}
      />
    </div>
  );
}

export default Rating;
