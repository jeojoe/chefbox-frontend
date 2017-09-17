import React from 'react';
import Head from 'next/head';
import { stylesheet, classNames } from './index.css';

export default () => (
  <div>
    <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
    <div className={[classNames.text]}>Welcome to next.js!</div>
  </div>
);
