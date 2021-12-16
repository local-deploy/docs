import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const FeatureList = [
    {
        title:       'Easy to use',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             .
                         </>
                     ),
    },
    {
        title:       'Easy to customize',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             .
                         </>
                     ),
    },
    {
        title:       'Multiplatform',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             .
                         </>
                     ),
    },
    {
        title:       'Flexible balancer',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             .
                         </>
                     ),
    },
    {
        title:       'Catching mail',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             .
                         </>
                     ),
    },
    {
        title:       'Only Docker required',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             .
                         </>
                     ),
    },
];

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={clsx(styles.hero)}>
            {/*<div className="container">*/}
            {/*    <h1 className="hero__title">{siteConfig.title}</h1>*/}
            <div className={styles.heroInner}>
                <h1 className={styles.heroProjectTagline}>
                    {/*<img alt="DL" className={styles.heroLogo} src="img/logo.svg"/>*/}
                    <div className={styles.heroTitleTextHtml}><b>DL</b></div>
                </h1>
                <h2 className={styles.heroTextHtml}>Site deployment assistant locally</h2>
                <p className={styles.heroTextHtml}>DL provides a Docker powered local development experience for your project that is compatible with macOS, Windows (WSL2),
                    and Linux. Other than Docker (docker-compose) no software or libraries are required to be installed on your local computer before using DL. </p>
                <p className={styles.heroTextHtml}>DL's simple CLI means you can start building your application without any previous Docker experience.</p>
                <div className={styles.indexCtas}>
                    <a className={styles.indexCtasGetStartedButton} href="intro">Start using DL</a>
                    {/*<a href="intro" className={styles.indexTryMeButton}>Try a Demo</a>*/}
                </div>
            </div>
            {/*<p className="hero__subtitle"><Translate>Site deployment assistant locally</Translate></p>*/}
            {/*<div className={styles.buttons}>*/}
            {/*    <Link*/}
            {/*        className="button button--secondary button--lg"*/}
            {/*        to="/docs/intro">*/}
            {/*        Docusaurus Tutorial - 5min ⏱️*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/*</div>*/}
        </div>
    );
}

function HomepageAnnouncement() {
    return (
        <div className={clsx(styles.announcement, styles.announcementDark)}>
            <div className={styles.announcementInner}>.</div>
        </div>
    );
}

function HomepageFeatures() {
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

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            description="site deployment assistant locally">
            <HomepageHeader/>
            {/*<HomepageAnnouncement/>*/}
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
