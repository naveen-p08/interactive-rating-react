import PropTypes from "prop-types";
import styles from "./RatingForm.module.css";

RatingForm.propTypes = {
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
};

function RatingForm({ handleClick, handleSubmit }) {
  const length = 5;
  let buttonMap = Array.from({ length: length }, (_, index) => index + 1);

  function submitForm(e) {
    e.preventDefault();
    handleSubmit((prev) => !prev);
  }

  return (
    <form onSubmit={(e) => submitForm(e)}>
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
