import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
  AiOutlineLink,
} from "react-icons/ai";
import { SiAcademia } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import styles from "../../assets/sass/style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={`${styles.headerContent} ${styles.grid} ${styles.items__Center}`}
        >
          <div className={styles.headerIntro}>
            <div
              className={`${styles.flex} ${styles.items__End} ${styles.headerIntroWrapper}`}
            >
              <img src={FaLink} alt="avatar" className={`${styles.avatar}`} />
              <h1 className={`${styles.headerName} ${styles.text__Mauve}`}>
                Tomasz Labuk, PhD, <br /> Senior technical writer
              </h1>
            </div>
            <p
              className={`${styles.headerText} ${styles.text} ${styles.text__White}`}
            >
              Even the best piece of code can prove to be useless when it is not
              documented well enough. In the so-called "age of UX", user
              experience is not a commodity, but a staple of every software
              product. And surely, good technical documentation is one of the
              founding pillars of UX. In my work, I leverage my international
              academic background, expertise in technical writing for complex
              innovations in Deep Tech, and knowledge of front-end technologies.
              I combine them with a flair for coding & complex problem-solving
              skills to develop superb technical content and tools for holistic
              software documentation.
            </p>
          </div>

          <div className={styles.headerContact}>
            <ul
              className={`${styles.contactInfoList} ${styles.grid} ${styles.text__White}`}
            >
              <li
                className={`${styles.grid} ${styles.items__Start} ${styles.infoItem}`}
              >
                <span className={styles.infoItem__Icon}>
                  <AiFillMail size={13} />
                </span>
                <p className={styles.infoItem__Text}>
                  Email:{" "}
                  <span className={styles.text}>this.cursive@gmail.com</span>
                </p>
              </li>
              <li
                className={`${styles.grid} ${styles.items__Start} ${styles.infoItem}`}
              >
                <span className={styles.infoItem__Icon}>
                  <AiFillPhone size={13} />
                </span>
                <p className={styles.infoItem__Text}>
                  Phone: <span className={styles.text}>+48 000 000 000</span>
                </p>
              </li>
              <li
                className={`${styles.grid} ${styles.items__Start} ${styles.infoItem}`}
              >
                <span className={styles.infoItem__Icon}>
                  <AiFillEnvironment size={14} />
                </span>
                <p className={styles.infoItem__Text}>
                  Address: <span className={styles.text}>Kraków, Poland</span>
                </p>
              </li>
              <li
                className={`${styles.grid} ${styles.items__Start} ${styles.infoItem}`}
              >
                <span className={styles.infoItem__Icon}>
                  <AiOutlineLink size={15} />
                </span>
                <p className={styles.infoItem__Text}>
                  Website:{" "}
                  <span className={styles.text}>https://this-cursive.io/</span>
                </p>
              </li>
            </ul>
            <ul
              className={`${styles.contactSocialList} ${styles.flex} ${styles.items__Center}`}
            >
              <li className={styles.socialItem}>
                <Link to="/">
                  <SiAcademia size={20} />
                  <span className={`${styles.tooltip} ${styles.text}`}>
                    Academia
                  </span>
                </Link>
              </li>
              <li className={styles.socialItem}>
                <Link to="/">
                  <AiFillLinkedin size={25} />
                  <span className={`${styles.tooltip} ${styles.text}`}>
                    Linkedin
                  </span>
                </Link>
              </li>
              <li className={styles.socialItem}>
                <Link to="/">
                  <AiFillGoogleCircle size={25} />
                  <span className={`${styles.tooltip} ${styles.text}`}>
                    Email
                  </span>
                </Link>
              </li>
              <li className={styles.socialItem}>
                <Link to="/">
                  <AiFillGithub size={25} />
                  <span className={`${styles.tooltip} ${styles.text}`}>
                    Github
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
