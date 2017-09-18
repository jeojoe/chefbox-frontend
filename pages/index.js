import React from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import stylesheet from '../styles/pages/index.css';

export default () => (
  <div>
    <Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
    <Layout title="Chef Box Delivery : Ready to cook right at your home.">
      {/* Banner */}
      <section className="container white-bg">
        <div className="banner">
          <h1>Ingredients Delivered<br />to Your Home.</h1>
          <h2>ชุดทำอาหารสำเร็จรูป ส่งตรงถึงบ้านคุณ</h2>
          <div className="enjoy">Just ENJOY COOKING !</div>
          <a className="button accent action">เลือกเมนู {'>'}</a>
        </div>
      </section>
      {/* Problem */}
      <section className="problem">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="row" style={{ padding: '20px 20px 0' }}>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                วัตถุดิบครบครัน
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                ปริมาณพอเหมาะ
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                การันตีความอร่อย
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="box">
                ไม่ทิ้งของเหลือ
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
        <div className="row center-xs">
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
        <div className="row center-xs info-final">
          <div className="col-xs-12 col-md-6">
            <div className="box">
              <h1>สั่งวัตถุดิบที่คุณต้องการ</h1>
              <p>วัตถุดิบจะถูกส่งถึงมือคุณในวันถัดไป</p>
              <div className="contact">
                เพียงคุณ add มาที่ line : @chefbox.delivery หรือโทรมาที่เบอร์ 092-016-0836
              </div>
              <div className="button accent">
                เลือกเมนู {'>'}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Menu of the month */}
      <section className="menu-month container white-bg">
        <div className="row center-xs">
          <div className="col-xs-11 col-md-10">
            <div className="box">
              <div className="header"><h1>Menu of the Month</h1></div>
              <h1>sdlfksdlfksdlfk</h1>
              <h1>sdlfksdlfksdlfk</h1>
              <h1>sdlfksdlfksdlfk</h1>
              <h1>sdlfksdlfksdlfk</h1>
              <h1>sdlfksdlfksdlfk</h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
);
