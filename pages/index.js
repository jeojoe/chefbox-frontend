import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import stylesheet from './index.css';

export default () => (
  <div>
    <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
    <Layout title="Chef Box Delivery : Ready to cook right at your home.">
      <div className="container">
        <div className="banner">dlsfjskldfh</div>
      </div>
    </Layout>
  </div>
);
