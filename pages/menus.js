import React from 'react';
import Head from 'next/head';
import { Layout, FoodCard, CTASection } from '../components';
import { Link } from '../routes';
import stylesheet from '../styles/pages/menus.css';

export default () => (
  <div id="menu-page">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Layout title="Menu | Chef Box Delivery : Ready to cook right at your home.">
      <section className="header">
        <div className="overlay">
          <div style={{ textAlign: 'center' }}>
            <h1>Menus Today</h1>
            <h3>เมนูประจำวันนี้</h3>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="box">
                  <FoodCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
);
