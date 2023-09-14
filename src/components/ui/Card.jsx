import PropTypes from "prop-types";
import styles from "./Card.module.css";

Card.propTypes = {
  children: PropTypes.any,
};

function Card({ children }) {
  return <section className={styles.card}>{children}</section>;
}

export default Card;
