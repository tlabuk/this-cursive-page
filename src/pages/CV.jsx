import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin } from '../components/Icons';
import ExperienceItem from '../components/ExperienceItem';
import experienceData from '../data/experience.json';
import skillsData from '../data/skills.json';
import personalData from '../data/personal.json';
import styles from './CV.module.css';

const CV = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        <div className={styles.header}>
          <div className={styles.decorativeNumber}>CV</div>
          <h1 className={styles.name}>{personalData.name}, {personalData.subtitle}</h1>
          <div className={styles.title}>{personalData.title}</div>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Mail size={18} />
              {personalData.contact.email}
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} />
              {personalData.contact.phone}
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              {personalData.contact.address}
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {experienceData.experience.map(item => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {experienceData.education.map(item => (
            <div key={item.id} className={styles.educationItem}>
              <h3 className={styles.degreeTitle}>{item.degree}</h3>
              <div className={styles.institution}>{item.institution}</div>
              {item.note && <div className={styles.note}>{item.note}</div>}
              {item.description && <p className={styles.description}>{item.description}</p>}
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h4 className={styles.categoryTitle}>Practitioner</h4>
              <ul className={styles.skillList}>
                {skillsData.skills.practitioner.map((skill, index) => (
                  <li key={index}>
                    <span>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h4 className={styles.categoryTitle}>Intermediate</h4>
              <ul className={styles.skillList}>
                {skillsData.skills.intermediate.map((skill, index) => (
                  <li key={index}>
                    <span>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h4 className={styles.categoryTitle}>Competencies</h4>
              <ul className={styles.skillList}>
                {skillsData.skills.competencies.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Languages</h2>
          <div className={styles.languageGrid}>
            {skillsData.languages.map((language, index) => (
              <div key={index} className={styles.languageItem}>
                <div className={styles.languageName}>{language.name}</div>
                <div className={styles.languageLevel}>{language.level}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Awards & Scholarships</h2>
          <ul className={styles.awardsList}>
            {skillsData.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conferences</h2>
          <ul className={styles.conferencesList}>
            {skillsData.conferences.map((conference, index) => (
              <li key={index}>{conference}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CV;
