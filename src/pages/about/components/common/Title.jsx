import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";

const Title = ({ titleText }) => {
  return (
    <div
      className={`${styles.title} ${styles.flex} ${styles.items__Center} ${styles.text__Mauve}`}
    >
      <div className={styles.dotsShape}></div>
      <h3>{titleText}</h3>
    </div>
  );
};

export default Title;

Title.propTypes = {
  titleText: PropTypes.string,
};
