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

      {/* Keys */}
      <section className="keys">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row">
                <div className="col-12 col-md-6 box">
                  <div className="icon">
                    <i className="material-icons">shopping_cart</i>
                  </div>
                  <h2>สะดวก</h2>
                  <p>ไม่ต้องฝ่าร้อน ฝ่ารถติดไปซื้อวัตถุดิบไกลๆ เราจัดหาไว้ให้คุณครบแล้ว</p>
                </div>
                <div className="col-12 col-md-6 box">
                  <div className="icon">
                    <i className="material-icons">restaurant</i>
                  </div>
                  <h2>อร่อย</h2>
                  <p>วัตถุดิบและเครื่องปรุงทุกอย่าง ได้ถูกช่างตวงไว้อย่างพอเหมาะ เพื่อความอร่อยที่ลงตัว สามารถนำไปประกอบอาหารได้ทันที</p>
                </div>
                <div className="col-12 col-md-6 box">
                  <div className="icon">
                    <i className="material-icons">attach_money</i>
                  </div>
                  <h2>ประหยัด</h2>
                  <p>ไม่ต้องจ่ายเงินสำหรับการซื้อเครื่องปรุงทั้งขวด ที่ราคาเท่าข้าวทั้งจาน แต่ใช้เพียงนิดเดียวอีกต่อไป</p>
                </div>
                <div className="col-12 col-md-6 box">
                  <div className="icon">
                    <i className="material-icons">delete</i>
                  </div>
                  <h2>เก็บกวาดง่าย</h2>
                  <p>แทบจะไม่มีอะไรเหลือให้ทิ้ง เพราะทุกอย่างถูกจัดมาแบบพอดี ไม่ต้องมานั่งเสียดายของเหลืออีกต่อไป</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu of the month */}
      <section className="menu-month container white-bg">
        <div className="row">
          <div className="col-12 col-md-6">
            <img />
          </div>
          <div className="col-12 col-md-6">
            <div className="box">
              <h2>มีไรบ้างในกล่องของ Chefbox</h2>
            </div>
          </div>
        </div>
      </section>
      
      <section className="review container">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <img src="/static/review.jpg" alt="Chefbox Review" width="300" />
          </div>
        </div>
      </section>
      
    </Layout>
  </div>
);

export default withAnalytics(Index);
