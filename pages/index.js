import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import { stylesheet, classNames } from './index.css';

export default () => (
  <div>
    <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
    <Layout>
      <p className={classNames.text}>sdlfjlsdljfsdjf</p>
    </Layout>
  </div>
);
