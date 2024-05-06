import React from "react";
import Title from "../common/Title";
import PropTypes from "prop-types";
import styles from "../../assets/sass/style.module.scss";
import skillCss from "/static/img/about/skill_css.png";
import skillHtml from "/static/img/about/skill_html5.png";
import skillFigma from "/static/img/about/skill_figma.png";
import skillPhotoshop from "/static/img/about/skill_photoshop.png";
import skillTrello from "/static/img/about/skill_trello.png";
import skillSketch from "/static/img/about/skill_sketch.png";
import skillWireframe from "/static/img/about/skill_wireframe.png";
import skillXd from "/static/img/about/skill_xd.png";

const skillsData = [
  {
    id: "skill_1",
    icon: skillFigma,
    name: "Figma",
    description: "UI Design, Protoyping",
  },
  {
    id: "skill_2",
    icon: skillHtml,
    name: "HTML5",
    description: "Hypertext Markup",
  },
  {
    id: "skill_3",
    icon: skillCss,
    name: "CSS",
    description: "Attractive Design & Frameworks",
  },
  {
    id: "skill_4",
    icon: skillPhotoshop,
    name: "Adobe Photoshop",
    description: "Picture Edit & Transformation",
  },
  {
    id: "skill_5",
    icon: skillSketch,
    name: "Sketch",
    description: "UI Design & Prototyping",
  },
  {
    id: "skill_6",
    icon: skillTrello,
    name: "Trello",
    description: "Project Management Knowledge",
  },
  {
    id: "skill_7",
    icon: skillWireframe,
    name: "Wireframing",
    description: "Creating wireframes prior to design",
  },
  {
    id: "skill_8",
    icon: skillXd,
    name: "Adobe XD",
    description: "Adobe Tool for UI Design",
  },
];

const Skill = () => {
  // Define skillsData directly inside the component

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
