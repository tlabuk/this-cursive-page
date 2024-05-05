import CertificateAward from "./components/CertificateAward/CertificateAward";
import BackgroundEffect from "./components/background_effect/BackgroundEffect";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Hobbies from "./components/hobbies/Hobbies";
import Skill from "./components/skill/Skill";
import GoBack from "./components/goback/GoBack";
import styles from "./assets/sass/style.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <Experience />
      <Education />
      <Skill />
      <CertificateAward />
      <Hobbies />
      {/* Effects */}
      <GoBack />
      <BackgroundEffect />
    </div>
  );
};

export default HomeScreen;
