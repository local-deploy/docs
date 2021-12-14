import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const FeatureList = [
    {
        title:       'Easy to Use',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             Docusaurus was designed from the ground up to be easily installed and
                             used to get your website up and running quickly.
                         </>
                     ),
    },
    {
        title:       'Focus on What Matters',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                             ahead and move your docs into the <code>docs</code> directory.
                         </>
                     ),
    },
    {
        title:       'Powered by React',
        Svg:         require('../../static/img/logo.svg').default,
        description: (
                         <>
                             Extend or customize your website layout by reusing React. Docusaurus can
                             be extended while reusing the same header and footer.
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
                <h2 className={styles.heroProjectTagline}>
                <img alt="DL" className={styles.heroLogo} src="img/logo.svg"/>
                <span className={styles.heroTitleTextHtml}>Site deployment assistant <b>locally</b></span>
            </h2>
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
