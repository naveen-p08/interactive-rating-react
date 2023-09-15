/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import styles from "./ThankYou.module.css";

ThankYou.propTypes = {
  rating: PropTypes.number,
};

function ThankYou({ rating = 0 }) {
  return (
    <div>
      <div className={styles.image_container}>
        <img
          src="/illustration-thank-you.svg"
          alt="device image"
          aria-hidden={true}
        />
      </div>
      <div className={styles.highlight_container}>
        <span className={styles.highlight}>You selected {rating} out of 5</span>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. you ever need more
        support. don't hesitate to get'n touch!
      </p>
    </div>
  );
}

export default ThankYou;
