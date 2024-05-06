import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";

const CertificateAward = () => {
  const certificateData = [
    {
      id: "cert_award_1",
      icon: "/img/about/coursera.png",
      provider: "Coursera",
      course: "UI/UX Advance Course",
      startDate: "Dec 2021",
      endDate: "Feb 2022",
    },
    {
      id: "cert_award_2",
      icon: "/img/about/google.png",
      provider: "Google",
      course: "Google UX Design Professional Certificate",
      startDate: "Mar 2021",
      endDate: "Jun 2021",
    },
    {
      id: "cert_award_3",
      icon: "/img/about/udemy.png",
      provider: "Udemy",
      course: "Fundamental of UI/UX for Students",
      startDate: "Jun 2020",
      endDate: "Sept 2020",
    },
  ];
  return (
    <div className={`${styles.certAwardSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div
          className={`${styles.certAwardContent} ${styles.dottedBorderLeft}`}
        >
          <Title titleText={"Certificates & Awards"} />
          <div className={`${styles.certAwardList} ${styles.grid}`}>
            {certificateData.map((item) => (
              <CertificateAwardItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateAward;

const CertificateAwardItem = ({ item }) => {
  return (
    <div
      className={`${styles.certAwardItem} ${styles.grid} ${styles.items__Center}`}
    >
      <div className={styles.certAwardIcon}>
        <img src={item.icon} alt="" />
      </div>
      <div className={`${styles.certAwardInfo} ${styles.grid}`}>
        <div className={styles.certAwardInfoL}>
          <p className={styles.certAwardProvider}>{item.provider}</p>
          <h3 className={styles.certAwardCourse}>{item.course}</h3>
        </div>
        <div
          className={`${styles.certAwardInfoR} ${styles.flex} ${styles.items__Center} ${styles.justify__End}`}
        >
          {item.startDate} - {item.endDate || "Present"}
        </div>
      </div>
    </div>
  );
};

CertificateAwardItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
  }).isRequired,
};
