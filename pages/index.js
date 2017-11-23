import React from 'react';
import Head from 'next/head';

import { Layout, FoodCard } from '../components';
import { Link } from '../routes';
import { withAnalytics } from '../utils';

import stylesheet from '../styles/pages/index.css';

const Index = () => (
  <div>
    <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
    <Layout title="Chef Box Delivery : Ready to cook right at your home.">
      {/* Banner */}
      <section className="banner">
        <div className="content">
          <h1 className="h-eng">Ingredients Delivered<br />To Your Home</h1>
          <h4 className="h-th">ประสบการณ์ใหม่ในการทำอาหาร<br />ส่งตรงถึงบ้านคุณ</h4>
        </div>
      </section>

      <section className="review container">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <img src="/static/review.jpg" alt="Chefbox Review" width="300" />
          </div>
        </div>
      </section>
      {/* Menu of the month */}
      <section className="menu-month container white-bg">
        <div className="row center-xs">
          <div className="col-xs-11 col-md-10">
            <div className="box outer">
              <div className="header"><h1>Menu of the Month</h1></div>
              <div className="row start-xs" style={{ padding: '20px 20px 5px' }}>
                <div className="col-xs-12 col-md-4">
                  <div className="box" style={{ padding: '0 5px' }}>
                    <FoodCard />
                  </div>
                </div>
                <div className="col-xs-12 col-md-4">
                  <div className="box" style={{ padding: '0 5px' }}>
                    <FoodCard />
                  </div>
                </div>
                <div className="col-xs-12 col-md-4">
                  <div className="box" style={{ padding: '0 5px' }}>
                    <FoodCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
);

export default withAnalytics(Index);
