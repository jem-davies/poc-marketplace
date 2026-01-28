import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import ComponentsByCategory from '../theme/ComponentsByCategory';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';


interface FeatureArgs {
  imageUrl?: string;
  title?: string;
  description: JSX.Element;
};

function Home() {
  const context = useDocusaurusContext();
  const siteConfig = context.siteConfig;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Fancy stream processing made operationally mundane">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/logo_hero.svg" />
            </div>
          </div>
        </div>
      </header>
      <main>
      

<ComponentsByCategory type="processors"></ComponentsByCategory>

      </main>
    </Layout>
  );
}

export default Home;
