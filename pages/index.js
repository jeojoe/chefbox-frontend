import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import { stylesheet, classNames as c } from './index.css';

export default () => (
  <div>
    <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
    <Layout>
      {/* Main Banner */}
      <div className="container">
        <div className={c.banner}>dlsfjskldfh</div>
      </div>
    </Layout>
  </div>
);
