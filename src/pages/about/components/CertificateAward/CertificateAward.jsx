import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";

const CertificateAward = () => {
  return (
    <div className={`${styles.certAwardSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div
          className={`${styles.certAwardContent} ${styles.dottedBorderLeft}`}
        >
          <Title titleText={"Certificates & Awards"} />
          <div className={`${styles.certAwardList} ${styles.grid}`}>
            {DATA.certificatesAndAwards?.map((item) => (
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
