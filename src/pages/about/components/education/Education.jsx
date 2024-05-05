import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <div className={`${styles.educationSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div
          className={`${styles.educationContent} ${styles.dottedBorderLeft}`}
        >
          <Title titleText={"Education"} />
          <div className={`${styles.educationList} ${styles.grid}`}>
            {DATA.educationalExperiences?.map((item) => (
              <EducationItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

const EducationItem = ({ item }) => {
  return (
    <div className={styles.educationItem} key={item.id}>
      <div
        className={`${styles.eduTitle} ${styles.flex} ${styles.items__Center} ${styles.text__White}`}
      >
        <IoSchoolSharp size={20} className={styles.eduIcon} />
        <h3 className={styles.eduCourse}>{item.course}</h3>
      </div>
      <p className={`${styles.eduInfo} ${styles.text}`}>
        {item.institution}, {item.startDate} - {item.endDate || "Present"}
        {""}({item.degree && `${item.degree}`})
      </p>
    </div>
  );
};

EducationItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // icon: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    institution: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    degree: PropTypes.string,
  }),
};
