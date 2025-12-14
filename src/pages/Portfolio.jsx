import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioCard from '../components/PortfolioCard';
import portfolioData from '../data/portfolio.json';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <Header showCVButton={true} />

        <section className={styles.portfolioSection}>
          <h2 className={styles.sectionTitle}>
            Portfolio of Work
            <div className={styles.titleUnderline} />
          </h2>

          <div className={styles.grid}>
            {portfolioData.portfolioItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        <Footer showCVCTA={true} />
      </div>
    </div>
  );
};

export default Portfolio;
