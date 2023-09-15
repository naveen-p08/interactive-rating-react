import PropTypes from "prop-types";
import styles from "./RatingForm.module.css";

RatingForm.propTypes = {
  handleClick: PropTypes.func,
};

function RatingForm({ handleClick }) {
  const length = 5;
  let buttonMap = Array.from({ length: length }, (_, index) => index + 1);

  return (
    <form>
      <div className={styles.btn_container}>
        {buttonMap.map((button, index) => {
          return (
            <button
              type="button"
              key={index}
              className={styles.rating_btn}
              aria-label={`${button} stars`}
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          );
        })}
      </div>

      <button type={"submit"} className={styles.submit_btn}>
        submit
      </button>
    </form>
  );
}

export default RatingForm;
