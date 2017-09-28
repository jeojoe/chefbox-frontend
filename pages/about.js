import React from 'react';
import Head from 'next/head';
import { Layout, CTASection } from '../components';
import stylesheet from '../styles/pages/about.css';

export default () => (
  <div id="about-page">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Layout title="About | Chef Box Delivery : Ready to cook right at your home.">
      <div className="container">
        <div className="row center-xs header">
          <div className="col-xs-12 col-md-8">
            <img src="/static/logo.png" alt="Chefbox Logo" />
            <h1>Chefbox Delivery</h1>
            <p>เราเชื่อว่าการทำอาหารนั้นสามารถทำให้เกิดได้ทั้ง ความสุข ความสนุก แรงบันดาลใจ การเรียนรู้ ความตั้งใจ ความภาคภูมิใจ และอีกมากมาย เพราะเราเองก็เป็นกลุ่มคนที่มีความหลงใหลในการทำอาหาร เราจึงอยากส่งต่อสิ่งเหล่านี้ให้คนอื่นให้ได้มากที่สุด</p>
          </div>
        </div>

        <div className="row detail" style={{ justifyContent: 'center' }}>
          <div className="col-xs-12 col-md-8">
            <div className="row">
              <div className="col-xs-8 col-md-4">
                <div className="head-box">
                  Mission
                </div>
              </div>
              <div className="col-xs-12 col-md-7 col-md-offset-1">
                <p className="head">To solve the problem of people who wanted to cook, make them enjoy cooking whenever they want.</p>
                <p>เราจะแก้ปัญหาให้คนที่อยากทำอาหารเนื่องในโอกาสใดก็ตามได้ทำ สนุกกับการทำอาหารได้เมื่อพวกเค้าต้องการ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row detail" style={{ justifyContent: 'center' }}>
          <div className="col-xs-12 col-md-8">
            <div className="row" style={{ justifyContent: 'center' }}>
              <div className="col-xs-8 col-md-4">
                <div className="head-box">
                  What we do
                </div>
              </div>
              <div className="col-xs-12 col-md-7 col-md-offset-1">
                <p className="head">เราจัดส่งเครื่องปรุงและวัตถุดิบสดใหม่ ที่ชั่งตวงไว้พอดีกับสูตรอาหารเด็ดๆ จากเชฟของเราถึงมือคุณ</p>
                <p>โดยคุณสามารถสั่งสินค้าล่วงหน้าอย่างน้อย 1 วัน (ตัดออเดอร์ 6 โมงเย็น) และรับสินค้าในวันถัดไป โดยสามารถนัดเวลาจัดส่งกับ admin ของเราได้ทุกช่องทาง</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row detail" style={{ justifyContent: 'center' }}>
          <div className="col-xs-12 col-md-8">
            <div className="row">
              <div className="col-xs-8 col-md-4">
                <div className="head-box">
                  ช่องทางการสั่ง
                </div>
              </div>
              <div className="col-xs-12 col-md-7 col-md-offset-1">
                <p className="head">Line@(@Chefboxdelivery) Inbox Facebook fan page (Chefbox.delivery)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row detail last center-xs">
          <div className="col-xs-12 col-md-8">
            <p className="head">To solve the problem of people who wanted to cook, make them enjoy cooking whenever they want.</p>
            <p>เราจะแก้ปัญหาให้คนที่อยากทำอาหารเนื่องในโอกาสใดก็ตามได้ทำ สนุกกับการทำอาหารได้เมื่อพวกเค้าต้องการ</p>
          </div>
        </div>

        <div className="row center-xs" style={{ marginTop: '50px' }}>
          <div className="col-xs-12 col-md-6">
            <CTASection />
          </div>
        </div>
      </div>
    </Layout>
  </div>
);
