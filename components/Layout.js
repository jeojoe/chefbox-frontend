import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import stylesheet from './Layout.css';

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Mitr:300,400,500" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    {/* Navbar */}
    <nav id="nav">
      <div className="container" style={{ height: '100%' }}>
        <div className="row">
          <div className="col-xs-4">
            <Link href="/menu">
              <a className="button" >เมนูของเรา</a>
            </Link>
          </div>
          <div className="col-xs-4 center-xs">
            <img src="/static/logo.png" className="logo" alt="Chefbox Delivery : Ready to Cook" />
          </div>
          <div className="col-xs-4 end-xs">
            <a>เข้าสู่ระบบ</a>
            <a className="button-accent">สมัครสมาชิค</a>
          </div>
        </div>
      </div>
    </nav>

    <div className="spacer" />

    { children }

    {/* <footer>
      this is footer
    </footer> */}
    <style jsx>{`
      .button-accent {
        background-color: blue;
      }
    `}</style>
  </div>
);

export default Layout;
