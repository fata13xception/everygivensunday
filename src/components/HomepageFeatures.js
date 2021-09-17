import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '3rem',
    }}>
    {children}
  </span>
);

const FeatureList = [
  {
    title: 'EGS CLA',
    color: '#1ECBE1',
    Svg: require('../../static/img/egs-cla.svg').default,
    urlLeague: 'https://www58.myfantasyleague.com/2021/home/49205#0',
    urlBylaws: 'https://www58.myfantasyleague.com/2021/home/49205#0',
    description: (
      <>
        The original 12 team, full-IDP classic dynasty league where it all began.
      </>
    ),
  },
  {
    title: 'EGS PRO',
    color: '#1EE196',
    Svg: require('../../static/img/egs-pro.svg').default,
    urlLeague: 'https://www61.myfantasyleague.com/2021/home/73667#0',
    description: (
      <>
        An NFL-like 32 team, full-IDP classic dynasty league.
      </>
    ),
  },
  {
    title: 'EGS SFX',
    color: '#1E6AE1',
    Svg: require('../../static/img/egs-sfx.svg').default,
    urlLeague: 'https://www58.myfantasyleague.com/2021/home/62923#0',
    description: (
      <>
        The superflex salaries and contracts, full-IDP auction dynasty league.
      </>
    ),
  },
  {
    title: 'EGS SIM',
    color: '#1E6AE1',
    Svg: require('../../static/img/egs-sim.svg').default,
    urlLeague: 'https://www58.myfantasyleague.com/2021/home/67057#0',
    description: (
      <>
        An NFL-like salaries and contracts, full-IDP auction dynasty league.
      </>
    ),
  },
];

function Feature({Svg, title, description, urlLeague, urlBylaws, color}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <a href={urlLeague} target="_blank">
          <Svg className={styles.featureSvg} alt={title} />
        </a>
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
        {/* <div className={styles.featureRow}>
          <div className={styles.featureColumn}>
            <a href={urlLeague} target="_blank">League</a>
          </div>
          <div className={styles.featureColumn}>
            <a href={urlBylaws} target="_blank">Bylaws</a>
          </div>
        </div> */}
      <div className="text--center padding-horiz--md">
        {/* <h3>{title}</h3> */}
        {/* <Highlight color={color}>{title}</Highlight> */}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
