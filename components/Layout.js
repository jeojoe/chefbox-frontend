import React from 'react';
import Head from 'next/head';
import { stylesheet, classNames as c } from './Layout.css';

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Mitr:300,500" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <nav id={c.nav}>
      sdkfjdslfsdkf
    </nav>
    { children }
  </div>
);

export default Layout;