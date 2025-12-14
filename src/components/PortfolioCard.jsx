import { useState } from 'react';
import { ExternalLink } from './Icons';
import { iconMap } from './Icons';
import styles from './PortfolioCard.module.css';

const PortfolioCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[item.icon];

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card number */}
      <div className={styles.number}>
        0{index + 1}
      </div>

      {/* Icon */}
      <div className={styles.iconWrapper}>
        <Icon size={28} color={isHovered ? '#1a1410' : '#B85C3E'} />
      </div>

      {/* Category badge */}
      <div className={styles.category}>
        {item.category}
      </div>

      <h3 className={styles.title}>
        {item.title}
      </h3>

      <p className={styles.description}>
        {item.description}
      </p>

      {/* Tags */}
      <div className={styles.tags}>
        {item.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <div className={styles.link}>
        View Work
        <ExternalLink 
          size={16} 
          className={styles.linkIcon}
        />
      </div>

      {/* Decorative corner */}
      <div className={styles.corner} />
    </div>
  );
};

export default PortfolioCard;
