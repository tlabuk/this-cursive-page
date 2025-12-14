import styles from './ExperienceItem.module.css';

const ExperienceItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.company}>{item.company}</div>
      <div className={styles.date}>{item.date}</div>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default ExperienceItem;
