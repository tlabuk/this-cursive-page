import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  const educationalExperiences = [
    {
      id: "edu_1",
      course: "Ph.D. studies",
      institution: "University of Silesia",
      degree: "Doctor of Philosophy (Ph.D.) with honors",
      startDate: "Oct 2014",
      endDate: "Oct 2019",
    },
    {
      id: "edu_2",
      course: "Classical philology (post-grad)",
      institution: "Jagiellonian University",
      degree: "Master's degree",
      startDate: "Oct 2010",
      endDate: "Jul 2014",
    },
    {
      id: "edu_3",
      course: "Classical philology (undergrad)",
      institution: "Jagiellonian University",
      degree: "Bachelor's degree",
      startDate: "Oct 2008",
      endDate: "Jul 2010",
    },
    {
      id: "edu_4",
      course: "Arts Omnibus: Philosophy & Classics",
      institution: "University Colege Dublin",
      degree: "",
      startDate: "2006",
      endDate: "2008",
    },
  ];

  return (
    <div className={`${styles.educationSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div
          className={`${styles.educationContent} ${styles.dottedBorderLeft}`}
        >
          <Title titleText={"Education"} />
          <div className={`${styles.educationList} ${styles.grid}`}>
            {educationalExperiences?.map((item) => (
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
        {item.institution},<br /> {item.startDate} - {item.endDate || "Present"}
        {""}
        <br />
        <i>{item.degree && `${item.degree}`}</i>
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
