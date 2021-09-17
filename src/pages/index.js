import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import HomepageFeatures from '../components/HomepageFeatures';

import ShowCaseSVG from '@site/static/img/egs-logo.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <img src={ShowCaseSVG} alt="ShowCase logo" width="50%" /> */}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageHeader_Original() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title} Docs</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * TODO: figure out how to create a two-column homepage banner
 * 
 */

function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function TwoColumns({columnOne, columnTwo, reverse}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <Section background="dark" className="HeaderHero">
      <TwoColumns
        reverse
        // columnOne={<ShowCaseImageSVG />}
        columnOne={
          <>
            <h1 className="title">LEFT Column</h1>
            <p className="tagline">Learn once, write&nbsp;anywhere.</p>
          </>
        }
        columnTwo={
          <>
            <h1 className="title">RIGHT Column</h1>
            <p className="tagline">Learn once, write&nbsp;anywhere.</p>
          </>
        }
      />
    </Section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Teamwork Makes the Dream Work`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <HeaderHero /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
