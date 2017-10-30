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
      <section className="white-bg">
        <div className="banner">
          <div className="content">
            <h1 className="big">Ingredients Delivered<br />to Your Home.</h1>
            <h2>ชุดทำอาหารสำเร็จรูป ส่งตรงถึงบ้านคุณ</h2>
            <div className="enjoy">Just ENJOY COOKING !</div>
            <Link route="/menus">
              <a className="button accent action">เลือกเมนู {'>'}</a>
            </Link>
          </div>
        </div>
      </section>
      {/* Problem */}
      <section className="problem hide-sm">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="row" style={{ padding: '10px 20px 0' }}>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                <span className="hide-sm">~</span> วัตถุดิบครบครัน <span className="hide-sm">~</span>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                <span className="hide-sm">~</span> ปริมาณพอเหมาะ <span className="hide-sm">~</span>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                <span className="hide-sm">~</span> การันตีความอร่อย <span className="hide-sm">~</span>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                <span className="hide-sm">~</span> ไม่มีของเหลือ <span className="hide-sm">~</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Info */}
      <section className="info container white-bg">
        <div className="path">
          <svg width="514px" height="794px" viewBox="0 0 514 794" version="1.1">
            <title>Path 2</title>
            <desc>Created with Sketch.</desc>
            <defs />
            <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Landing" transform="translate(-461.000000, -872.000000)" stroke="#11346B" strokeWidth="3">
                <path d="M594.008273,874 C519.092934,897.650713 475.787864,956.682459 464.093065,1051.09524 C452.398266,1145.50802 534.546208,1214.94778 710.536891,1259.41453 C889.758656,1302.16736 977.194833,1350.81895 972.845422,1405.36928 C968.496012,1459.91962 887.067676,1546.12986 728.560416,1664" id="Path-2" />
              </g>
            </g>
          </svg>
        </div>
        {/* Box */}
        <div className="header-box">
          คุณก็สามารถทำอาหารดีๆ<br />ทานเองได้ที่บ้าน
        </div>
        {/* Info 1 */}
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-6 col-md-5">
            <div className="box left">
              <img src="/static/landing-1.jpg" alt="Cooking is Fun !" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-5">
            <div className="box text left">
              <h2>พวกเราทีมงาน Chefbox ได้เลือกสรรวัตถุดิบ ในการทำเมนูอาหารที่อร่อย</h2>
              <p>และสามารถทำเองได้ไม่ยาก ไว้ให้คุณแบบพอดีๆ ไม่ต้องกลัวการซื้อวัตถุดิบเกินอีกต่อไป</p>
            </div>
          </div>
        </div>
        {/* Info 2 */}
        <div className="row center-xs" style={{ marginBottom: '40px' }}>
          <div className="col-xs-12 col-sm-6 col-md-5">
            <div className="box">
              <img src="/static/landing-2.jpg" alt="Cooking is Fun !" className="right" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-5 first-sm">
            <div className="box text right">
              <h2>และไม่ต้องห่วงว่าอาหารของคุณจะออกมารสชาติไม่ดี</h2>
              <p>เพราะเราได้ร่วมมือกับเชฟมือดีในการคิดค้นสูตรอาหาร พร้อมทั้งชั่งตวงทุกอย่างไว้ให้คุณเรียบร้อยแล้ว </p>
            </div>
          </div>
        </div>
        {/* Info 3 */}
        <div className="row center-xs info-final white-bg">
          <div className="col-xs-12 col-md-6">
            <div className="box">
              <h1>สั่งวัตถุดิบที่คุณต้องการ</h1>
              <p>วัตถุดิบจะถูกส่งถึงมือคุณในวันถัดไป</p>
              <div className="contact">
                เพียงคุณ add มาที่ line : @chefbox.delivery หรือโทรมาที่เบอร์ 092-016-0836
              </div>
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
