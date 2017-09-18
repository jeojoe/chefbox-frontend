import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import stylesheet from '../styles/pages/index.css';

export default () => (
  <div>
    <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
    <Layout title="Chef Box Delivery : Ready to cook right at your home.">
      <div className="container">
        <div className="banner">
          <h1>Ingredient Delivered<br />to Your Home.</h1>
          <div className="enjoy">Just ENJOY COOKING !</div>
          <div>
            <a className="button accent action">เลือกเมนู {'>'}</a>
          </div>
        </div>
      </div>
      <div className="problem">
        <div className="container">
          <div className="row" style={{ padding: '20px 20px 0' }}>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                หาวัตถุดิบไม่ได้ ?
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                ซื้อปริมาณเท่าไหร่ ?
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                ทำแล้วไม่อร่อย ?
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                ไม่หมดของเหลือ ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);
