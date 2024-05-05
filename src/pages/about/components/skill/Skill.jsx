import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";

const Skill = () => {
  return (
    <div className={`${styles.skillSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div className={`${styles.skillContent} ${styles.dottedBorderLeft}`}>
          <Title titleText={"Skills"} />
          <div className={`${styles.skillList} ${styles.grid}`}>
            {DATA.skills?.map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const SkillItem = ({ item }) => {
  return (
    <div
      className={`${styles.skillItem} ${styles.text__Center} ${styles.text__White}`}
      key={item.id}
    >
      <div className={styles.skillIcon}>
        <img src={item.icon} alt="" />
      </div>
      <div className={styles.skillInfo}>
        <h3 className={styles.skillName}>{item.name}</h3>
        <p className={`${styles.skillDescription} ${styles.text}`}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
