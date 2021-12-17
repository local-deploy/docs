import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import Link from "@docusaurus/Link";

const FeatureList = [
    {
        title:       translate({message: 'Easy to use', description: 'Easy to use'}),
        Svg:         require('../../static/img/features/use.svg').default,
        description: (
                         <Translate>
                             DL can be easily installed and used to quickly launch website on your local computer
                         </Translate>
                     ),
    },
    {
        title:       translate({message: 'Easy to customize', description: 'Easy to customize'}),
        Svg:         require('../../static/img/features/custom.svg').default,
        description: (
                         <Translate>
                             You can customize or completely replace the containers being launched for your application
                         </Translate>
                     ),
    },
    {
        title:       translate({message: 'Multiplatform', description: 'Multiplatform'}),
        Svg:         require('../../static/img/features/multi.svg').default,
        description: (
                         <Translate>
                             You can run the project locally on Linux, macOS or Windows (via WSL2)
                         </Translate>
                     ),
    },
    {
        title:       translate({message: 'Flexible balancer', description: 'Flexible balancer'}),
        Svg:         require('../../static/img/features/balancer.svg').default,
        description: (
                         <Translate>
                             DL uses Traffic as a reverse proxy server. It allows flexible interaction with docker containers
                         </Translate>
                     ),
    },
    {
        title:       translate({message: 'Catching mail', description: 'Catching mail'}),
        Svg:         require('../../static/img/features/mail.svg').default,
        description: (
                         <Translate>
                             Emails sent from your site will be intercepted by the Mail Hog application
                         </Translate>
                     ),
    },
    {
        title:       translate({message: 'Only Docker required', description: 'Only Docker required'}),
        Svg:         require('../../static/img/features/docker.svg').default,
        description: (
                         <Translate>
                             There is no need to install additional software on your computer, except Docker (docker-compose)
                         </Translate>
                     ),
    },
];

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className={clsx(styles.hero)}>
            <div className={styles.heroInner}>
                <h1 className={clsx(styles.heroProjectTagline, styles.heroTitleTextHtml)}>
                    <b>Deploy Local</b>
                </h1>
                <h2 className={styles.heroTextHtml}><Translate>Site deployment assistant locally</Translate></h2>
                <p className={styles.heroTextHtml}>
                    <Translate id="heroText1" description="heroText1">
                        DL provides a Docker powered local development experience for your project that is compatible with macOS, Windows (WSL2), and Linux. Other than Docker (docker-compose) no software or libraries are required to be installed on your local computer before using DL.
                    </Translate>
                </p>
                <p className={styles.heroTextHtml}>
                    <Translate id="heroText2" description="heroText2">
                        DL's simple CLI means you can start building your application without any previous Docker experience.
                    </Translate>
                    </p>
                <div className={styles.indexCtas}>
                    <a className={styles.indexCtasGetStartedButton} href="intro"><Translate>Start using DL</Translate></a>
                    {/*<a href="intro" className={styles.indexTryMeButton}>Try a Demo</a>*/}
                </div>
            </div>
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
