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
import Avatar from "/static/img/about/avatar.png";
import { SiAcademia } from "react-icons/si";
import styles from "../../assets/sass/style.module.scss";

const Header = () => {
  const headerData = [
    {
      name: "Tomasz Labuk, Ph.D., <br/> Senior Technical Writer",
      lead: "Even the best piece of code can prove to be useless when it is not documented well enough. In the so-called age of UX, user experience is not a commodity, but a staple of every software product. And surely, good technical documentation is one of the founding pillars of UX. Drawing from my international academic background and experience in technical writing for Deep Tech innovations, I blend these with front-end technology knowledge to create comprehensive software documentation that enhances userexperience.",
      email: "this.cursive@gmail.com",
      phone: "+48 xxx xxx xxx",
      address: "Kraków, Poland",
      website:
        "<a href='/this-cursive-page/'>https://tlabuk.github.io/this-cursive-page/</a>",
    },
  ];

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
              <img src={Avatar} alt="avatar" className={styles.avatar} />
              <h1
                className={`${styles.headerName} ${styles.text__Mauve}`}
                dangerouslySetInnerHTML={{ __html: headerData[0].name }}
              ></h1>
            </div>
            <p
              className={`${styles.headerText} ${styles.text} ${styles.text__White}`}
            >
              {headerData[0].lead}
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
                  <span className={styles.text}>{headerData[0].email}</span>
                </p>
              </li>
              <li
                className={`${styles.grid} ${styles.items__Start} ${styles.infoItem}`}
              >
                <span className={styles.infoItem__Icon}>
                  <AiFillPhone size={13} />
                </span>
                <p className={styles.infoItem__Text}>
                  Phone:{" "}
                  <span className={styles.text}>{headerData[0].phone}</span>
                </p>
              </li>
              <li
                className={`${styles.grid} ${styles.items__Start} ${styles.infoItem}`}
              >
                <span className={styles.infoItem__Icon}>
                  <AiFillEnvironment size={14} />
                </span>
                <p className={styles.infoItem__Text}>
                  Address:{" "}
                  <span className={styles.text}>{headerData[0].address}</span>
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
                  <span
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: headerData[0].website }}
                  />
                </p>
              </li>
            </ul>
            <ul
              className={`${styles.contactSocialList} ${styles.flex} ${styles.items__Center}`}
            >
              <li className={styles.socialItem}>
                <Link to="https://independent.academia.edu/TomaszLabuk">
                  <SiAcademia size={20} />
                  <span className={`${styles.tooltip} ${styles.text}`}>
                    Academia
                  </span>
                </Link>
              </li>
              <li className={styles.socialItem}>
                <Link to="https://www.linkedin.com/in/tomasz-labuk/">
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
