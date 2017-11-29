import React from 'react';
import Head from 'next/head';

import { Layout, FoodCard, ReviewCarousel } from '../components';
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
      <section className="menu-month white-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img />
            </div>
            <div className="col-12 col-md-6">
              <div className="box">
                <h2>มีไรบ้างในกล่องของ<br />Chefbox</h2>
                <div className="items">
                  <div className="item">
                    <i className="material-icons">restaurant_menu</i>
                    <p>สูตรอาหารที่สามารถทำตามได้ง่ายๆ</p>
                  </div>
                  <div className="item">
                    <i className="material-icons">restaurant_menu</i>
                    <p>วัตถุดิบสดใหม่ที่ถูกคัดสรรมาอย่างดี บรรจุแยกกันอย่างเป็นสัดส่วน</p>
                  </div>
                  <div className="item">
                    <i className="material-icons">restaurant_menu</i>
                    <p>สามารถนำเข้าแช่ตู้เย็นได้อย่างไม่มีปัญหา</p>
                  </div>
                  <div className="item">
                    <i className="material-icons">restaurant_menu</i>
                    <p>ความสนุกที่จะทำให้คุณรู้สึกหยุดไม่ได้</p>
                  </div>
                  <div className="d-flex justify-content-center" style={{ padding: '19px' }}>
                    <Link route="/menus">
                      <button type="button" className="btn ">เลือกเมนูที่คุณชอบ</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9">
            <h1 className="h-eng">รีวิวจากเชฟมือใหม่</h1>
            <h4 className="h-th">#chefboxfamily</h4>
            <ReviewCarousel />
          </div>
        </div>
      </section>

      {/* <section className="social container">
        <h1 className="h-eng fancy-font"></h1>
        <h4 className="h-th fancy-font">#chefboxfamily</h4>
        <div className="row">
          <div className="col-12 col-md-4">
            <img src="/static/line.png" />
            <p></p>
          </div>
          <div className="col-12 col-md-4">
            <img src="/static/line.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/static/line.png" />
          </div>
        </div>
      </section> */}

      <section className="cta">
        {/* <h3 className="fancy-font mb-3">คุณก็สามารถทำอาหารดีๆทานเองได้ที่บ้าน</h3> */}
        <Link to="/menus">
          <button className="btn fancy-font btn-lg">เข้ามาดูเมนูก่อน</button>
        </Link>
      </section>
    </Layout>
  </div>
);

export default withAnalytics(Index);
