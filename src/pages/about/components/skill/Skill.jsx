import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";

const Skill = () => {
  const skillsData = [
    {
      id: "skill_1",
      icon: "/img/about/skill_figma.png",
      name: "Figma",
      description: "UI Design, Protoyping",
    },
    {
      id: "skill_2",
      icon: "/img/about/skill_html5.png",
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_3",
      icon: "/img/about/skill_css.png",
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_4",
      icon: "/img/about/skill_photoshop.png",
      name: "Adobe Photoshop",
      description: "Picture Edit & Transformation",
    },
    {
      id: "skill_5",
      icon: "/img/about/skill_sketch.png",
      name: "Sketch",
      description: "UI Design & Prototyping",
    },
    {
      id: "skill_6",
      icon: "/img/about/skill_trello.png",
      name: "Trello",
      description: "Project Management Knowledge",
    },
    {
      id: "skill_7",
      icon: "/img/about/skill_wireframe.png",
      name: "Wireframing",
      description: "Creating wireframes prior to design",
    },
    {
      id: "skill_8",
      icon: "/img/about/skill_xd.png",
      name: "Adobe XD",
      description: "Adobe Tool for UI Design",
    },
  ];

  return (
    <div className={`${styles.skillSc} ${styles.resumeBlock}`}>
      <div className={styles.container}>
        <div className={`${styles.skillContent} ${styles.dottedBorderLeft}`}>
          <Title titleText={"Skills"} />
          <div className={`${styles.skillList} ${styles.grid}`}>
            {skillsData?.map((item) => (
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
        <img src={item.icon} alt={item.name} />
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
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
