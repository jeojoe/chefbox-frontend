import React from 'react';
import Head from 'next/head';
import { Layout, FoodCard, CTASection } from '../components';
import stylesheet from '../styles/pages/menus.css';

export default () => (
  <div id="menu-page">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Layout title="Menu | Chef Box Delivery : Ready to cook right at your home.">
      <section className="header">
        <div className="overlay">
          <div className="container">
            <div className="row center-xs" style={{ justifyContent: 'center' }}>
              <div className="col-xs-9">
                <div className="content box">
                  <h1>Menus Today</h1>
                  <h3>เมนูประจำวันนี้</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="menus">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-10">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="box">
                    <FoodCard />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="box">
                    <FoodCard />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="box">
                    <FoodCard />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="box">
                    <FoodCard />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="box">
                    <FoodCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <CTASection />
          </div>
        </div>
      </section>
    </Layout>
  </div>
);
