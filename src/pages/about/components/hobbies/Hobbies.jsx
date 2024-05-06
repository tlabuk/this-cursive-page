import PropTypes from "prop-types";
import Title from "../common/Title";
import styles from "../../assets/sass/style.module.scss";

const Hobbies = () => {
  const hobbiesData = [
    {
      id: "hob_1",
      icon: "/img/about/gaming.png",
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: "/img/about/reading.png",
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: "/img/about/travelling.png",
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: "/img/about/blogging.png",
      name: "Blogging",
    },
  ];

  return (
    <div className={`${styles.hobbiesSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div className={`${styles.hobbiesContent} ${styles.dottedBorderLeft}`}>
          <Title titleText={"Hobbies & Interests"} />
          <div
            className={`${styles.hobbiesList} ${styles.flex} ${styles.items__Center} ${styles.flex__Wrap}`}
          >
            {hobbiesData?.map((item) => (
              <HobbiesItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.dotsShape}></div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

const HobbiesItem = ({ item }) => {
  return (
    <div
      className={`${styles.hobbiesItem} ${styles.flex} ${styles.items__Center}`}
    >
      <div className={styles.hobbiesIcon}>
        <img src={item.icon} alt="" />
      </div>
      <div className={styles.hobbiesText}>{item.name}</div>
    </div>
  );
};

HobbiesItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
