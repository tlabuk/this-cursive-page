import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";
import Agile from "/static/img/about/agile.png";
import FrontEnd from "/static/img/about/front-end.png";
import Certificate from "/static/img/about/certificate.png";
import NUI from "/static/img/about/nui.png";
import FreieLogo from "/static/img/about/freie-logo.png";

const CertificateAward = () => {
  const certificateData = [
    {
      id: "cert_award_1",
      icon: Agile,
      provider: "APMG international",
      course: "Agile PM foundation",
      description:
        "<a href='https://www.credly.com/badges/1900cbde-5497-48c6-a473-b68818c421fd/linked_in_profile'>Badge</a>",
      startDate: "Apr 2019",
      endDate: "Apr 2019",
    },
    {
      id: "cert_award_2",
      icon: FrontEnd,
      provider: "Web-coders.pl",
      course: "Front-end developers course",
      description:
        "160 hours total. Learnt technologies: CSS, SCSS, BEM, JavaScript, TypeScript, FetchAPI, RestAPI",
      startDate: "Feb 2022",
      endDate: "Jun 2022",
    },
    {
      id: "cert_award_3",
      icon: NUI,
      provider: "National University of Ireland",
      course: "3rd prize in the dr H.H. Stweart literary scholarship in Latin",
      description:
        "Awarded by National University of Ireland and University College Dublin",
      startDate: "Nov 2007",
      endDate: "Nov 2007",
    },
    {
      id: "cert_award_4",
      icon: FreieLogo,
      provider: "Freie Universität Berlin",
      course: "Research Stay with Alumni Programme at Freie Universität Berlin",
      description:
        "Two-month research stay awarded for scholarly projacts led by doctoral students",
      startDate: "Sep 2015",
      endDate: "Oct 2015",
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
          <h3
            className={styles.certAwardCourse}
            dangerouslySetInnerHTML={{ __html: item.course }}
          />
          <div
            className={styles.certAwardDescription}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
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
