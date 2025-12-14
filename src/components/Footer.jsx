import { Link } from 'react-router-dom';
import { FileText } from './Icons';
import styles from './Footer.module.css';
import personalData from '../data/personal.json';

const Footer = ({ showCVCTA = true }) => {
  return (
    <footer className={styles.footer}>
      {showCVCTA && (
        <div className={styles.cvCTA}>
          <div className={styles.decorative}>CV</div>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Want to see my full background?</h3>
            <p className={styles.ctaDescription}>
              View my complete CV with detailed experience, education, technical skills, and academic achievements
            </p>
            <Link to="/cv" className={styles.ctaButton}>
              <FileText size={20} />
              View Full CV
            </Link>
          </div>
        </div>
      )}

      <div className={styles.contact}>
        <div>
          <p className={styles.contactLabel}>Get in touch</p>
          <a href={`mailto:${personalData.contact.email}`} className={styles.contactEmail}>
            {personalData.contact.email}
          </a>
        </div>

        <div className={styles.copyright}>
          <div className={styles.copyrightDivider} />
          <p className={styles.copyrightText}>© 2025 {personalData.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
