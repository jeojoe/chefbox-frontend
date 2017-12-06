import React from 'react';
import Head from 'next/head';
import { Layout, FoodCard, CTASection } from '../components';
import { Link } from '../routes';
import stylesheet from '../styles/pages/menus.css';
import { getMenus } from '../utils/dummyData';

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
            {console.log(getMenus())}
            <div className="row justify-content-center">
              {getMenus().map(menu => (
                <div className="col-12 col-md-6 col-lg-4" key={menu.id}>
                  <div className="box">
                    <FoodCard
                      name={menu.name_th}
                      slug={menu.slug}
                      price={menu.price}
                      servings={menu.servings}
                      time={menu.time}
                      spicy={menu.spicy}
                      difficulty={menu.difficulty}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
);
