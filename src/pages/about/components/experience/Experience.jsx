import { FaLink } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import {
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
} from "../../assets/image";
import styles from "../../assets/sass/style.module.scss";

const Experience = () => {
  return (
    <div className={`${styles.experienceSc} resumeBlock`}>
      <div className={styles.container}>
        <div
          className={`${styles.experienceContent} ${styles.dottedBorderLeft}`}
        >
          <Title titleText={"Professional Experience"} />
          <div className={`${styles.experienceList} grid`}>
            {DATA.professionalExperiences.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const ExperienceItem = ({ item }) => {
  const showDiamondImage = (color) => {
    if (color === "Blue") {
      return DiamondLgBlue;
    } else if (color === "Green") {
      return DiamondLgGreen;
    } else if (color === "Orange") {
      return DiamondLgOrange;
    } else if (color === "Pink") {
      return DiamondLgPink;
    } else if (color === "Yellow") {
      return DiamondLgYellow;
    }
  };

  return (
    <div
      className={`${styles.experienceItem} ${styles.text__White}`}
      key={item.id}
    >
      <div
        className={`${styles.expTime} ${styles.flex} ${styles.items__Center}`}
      >
        <span className={styles.startTime}>{item.startDate}</span>
        <span>-</span>
        <div className={styles.endTime}>{item.endDate || "Present"}</div>
      </div>
      <div
        className={`${styles.expPosition} ${styles.flex} ${styles.items__Center} ${styles.flex__Wrap} ${styles.text__White}`}
      >
        <p className={styles.expPositionText}>{item.position}</p>
        <div className={styles.diamondShapesGroup}>
          {item.diamondColors?.map((color, index) => (
            <img key={index} src={showDiamondImage(color)} alt="" />
          ))}
        </div>
      </div>
      <div
        className={`${styles.expCompany} ${styles.flex} ${styles.items__Center} ${styles.flex__Wrap}`}
      >
        <div className={styles.companyLogo}>
          <MdWorkHistory size={20} />
        </div>
        <p className={styles.companyName}>{item.company.name}</p>
        <p className={`${styles.companyInfo} ${styles.text}`}>
          {item.company.info}
        </p>
      </div>
      <p className={`${styles.expDescription} ${styles.text}`}>
        {item.description}
      </p>
      <div className={styles.expLinks}>
        {item.links?.map((link) => (
          <a key={link.label} href={link.url} className={styles.text__Mauve}>
            <FaLink />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    position: PropTypes.string.isRequired,
    diamondColors: PropTypes.array,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    ),
  }),
};
