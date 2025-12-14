import { Link } from 'react-router-dom';
import { FileText } from './Icons';
import styles from './Header.module.css';
import personalData from '../data/personal.json';

const Header = ({ showCVButton = true }) => {
  return (
    <header className={styles.header}>
      <div className={styles.decorativeNumber}>01</div>

      <div className={styles.content}>
        <h1 className={styles.name}>{personalData.name}</h1>
        
        <div className={styles.titleWrapper}>
          <div className={styles.divider} />
          <p className={styles.title}>{personalData.title}</p>
        </div>

        <p className={styles.tagline}>
          {personalData.tagline}
        </p>

        <div className={styles.actions}>
          <div className={styles.branding}>
            THIS.[PORTFOLIO]
          </div>
          
          {showCVButton && (
            <Link to="/cv" className={styles.cvButton}>
              <FileText size={16} />
              VIEW CV
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
