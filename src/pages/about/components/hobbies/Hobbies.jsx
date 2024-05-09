import PropTypes from "prop-types";
import Title from "../common/Title";
import styles from "../../assets/sass/style.module.scss";
import Running from "/img/about/hobby_running.png";
import Writing from "/img/about/hobby_writing.png";
import Reading from "/img/about/hobby_reading.png";
import Cooking from "/img/about/hobby_cooking.png";
import Mountains from "/img/about/hobby_mountains.png";
import Cycling from "/img/about/hobby_cycling.png";

const Hobbies = () => {
  const hobbiesData = [
    {
      id: "hob_1",
      icon: Writing,
      name: "Writing",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Cooking,
      name: "Cooking",
    },
    {
      id: "hob_4",
      icon: Running,
      name: "Long-distance running",
    },
    {
      id: "hob_5",
      icon: Mountains,
      name: "Mountaineering",
    },
    {
      id: "hob_6",
      icon: Cycling,
      name: "Road cycling",
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
