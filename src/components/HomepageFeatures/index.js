import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ReadMoreButton from './ReadMoreButton/ReadMore';

const FeatureList = [
  {
    title: 'Technical documentation for Nobl9',
    href: 'https://www.davincilabs.eu/downloads/The_Codex_Q1_2022.pdf',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nobl9 is the first SLO platform that ensures monitoring of software projects. I’m a major contributor to Nobl9 documentation and web developer of documentation tools.
      </>
    ),
  },
  {
    title: 'API documentation',
    href: '/this-cursive-page/api/',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>

        This OpenAPI specification outlines a dummy API with endpoints for user management. It provides code samples in Python, JavaScript, Java, and cURL for interacting with the API.
      </>
    ),
  },
  {
    title: 'Fungal computers',
    href: 'https://www.davincilabs.eu/downloads/The_Codex_Q1_2022.pdf',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fungi are one of the oldest organisms on the Earth. They connect forests into one intelligent organism through their mycelial cells. Could we make computer hardware out of them?
      </>
    ),
  },
  {
    title: 'Intelligible AI',
    href: 'https://www.davincilabs.eu/downloads/The_Codex_Q3_2021.pdf',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our expectations towards the transformative potential of AI are extremely high. To fully harness it, we need to understand complexities AI algorithms. How can we achieve that?
      </>
    ),
  },
  {
    title: 'Federated Machine Learning',
    href: 'https://www.davincilabs.eu/downloads/The_Codex_Q2_2021.pdf',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        While Intelligence of AI is of extremely limited sort, algorithms govern every aspect of our lives, from content on social media, to industry. Can FL improve how AI works?
      </>
    ),
  },
];


function Feature({ Svg, title, description, href }) {

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <ReadMoreButton href={href} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx(styles.sectionTitle, isVisible && styles.slideIn)}>Check samples of my work</div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
