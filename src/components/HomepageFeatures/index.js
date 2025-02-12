import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
import ReadMoreButton from './ReadMoreButton/ReadMore';

const FeatureList = [
  {
    title: 'Technical documentation for Nobl9',
    href: 'https://docs.nobl9.com/',
    Svg: require('@site/static/img/homepage/folder.svg').default,
    description: (
      <>
        Nobl9 is the first SLO platform that ensures monitoring of software projects. I’m a major contributor to Nobl9 documentation and web developer of documentation tools.
      </>
    ),
  },
  {
    title: 'API documentation',
    href: '/this-cursive-page/api/',
    Svg: require('@site/static/img/homepage/api.svg').default,
    description: (
      <>
        This OpenAPI specification outlines a dummy API with endpoints for user management. It provides code samples in Python, JavaScript, Java, and cURL for interacting with the API.
      </>
    ),
  },
  {
    title: 'Fungal computers',
    href: 'https://drive.google.com/file/d/1AHebLK70ppV71LLQ0msd1lictxW7c6Ru/view?usp=sharing',
    Svg: require('@site/static/img/homepage/idea.svg').default,
    description: (
      <>
        Fungi are one of the oldest organisms on the Earth. They connect forests into one intelligent organism through their mycelial cells. Could we make computer hardware out of them?
      </>
    ),
  },
  {
    title: 'Intelligible AI',
    href: 'https://drive.google.com/file/d/1k-AU2Hdz_ISCgDOl043OBCHAzV_-jtQB/view?usp=sharing',
    Svg: require('@site/static/img/homepage/ai.svg').default,
    description: (
      <>
        Our expectations towards the transformative potential of AI are extremely high. To fully harness it, we need to understand complexities AI algorithms. How can we achieve that?
      </>
    ),
  },
  {
    title: 'Federated Machine Learning',
    href: 'https://drive.google.com/file/d/1bsfvhZx8V-sbAkdHKbUkIQLDgnsdqLN5/view?usp=sharing',
    Svg: require('@site/static/img/homepage/web.svg').default,
    description: (
      <>
        While Intelligence of AI is of extremely limited sort, algorithms govern every aspect of our lives, from content on social media, to industry. Can FL improve how AI works?
      </>
    ),
  },
  {
    title: 'The Belly as a Natural Symbol',
    href: 'https://drive.google.com/file/d/1sG8RMs3vHbARF3IhCrZKSKcI-BH3iXJb/view?usp=sharing',
    Svg: require('@site/static/img/homepage/pen.svg').default,
    description: (
      <>
        Human belly conveys a rich web of symbolic notions in Byzantine literature. In this article I uncover and analyse the prevailing patterns of social conceptualisations of the belly.
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
      <div className="padding-horiz--md">
        <Heading as="h3" className="text--center m-top">{title}</Heading>
        <p>{description}</p>
        <ReadMoreButton href={href} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {


  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx(styles.sectionTitle)}>Check samples of my work</div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
