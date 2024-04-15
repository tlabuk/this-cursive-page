import clsx from 'clsx';
import { homePageContent } from './data/content.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header>
      <div className={styles.row__hero}>
        <div className={styles.column__hero}>
          <div className={`${styles.hero__title} ${styles.typewriter}`}>
            {homePageContent[0].title}
          </div>
          <div className={styles.hero__subtitle}>
            {homePageContent[0].lead}
          </div>
        </div>
        <div className={styles.column__hero}>
          <img src="/img/hero/logo-big-horizontal.svg" className={styles.logoBanner} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
