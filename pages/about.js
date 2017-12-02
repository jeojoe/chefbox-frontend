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
        <div className="row header">
          <div className="col-12 col-md-8">
            <img src="/static/logo.png" alt="Chefbox Logo" className="mb-3" />
            <h1>Chefbox Delivery</h1>
            <p>ประสบการณ์ใหม่ในการทำอาหาร เพื่อตัวคุณเองและคนที่คุณรัก
     เราจัดส่งวัตถุดิบทุกอย่างที่จำเป็นสำหรับการทำอาหารมื้อพิเศษที่บ้านถึงมือคุณ โดยคัดเลือกวัตถุดิบชั้นเลิศ ในปริมาณที่พอดี ส่งมาให้พร้อมกับขั้นตอนการทำอย่างละเอียด ซึ่งคิดค้นขึ้นด้วยความใส่ใจ ทั้งสะอาด อร่อย และมีประโยชน์ พร้อมกับ มีทีมงานดูแลให้คำปรึกษาคุณจนจบขั้นตอนการประกอบอาหาร
     ไม่ว่าคุณจะทำอาหารเป็นหรือไม่ คุณก็สามารถสร้างประสบการณ์ใหม่ไปกับเรา</p>
          </div>
        </div>

        <div className="row detail">
          <div className="col-xs-12 col-md-8">
            <div className="row">
              <div className="col-xs-8 col-md-4">
                <div className="head-box">
                  Mission
                </div>
              </div>
              <div className="col-xs-12 col-md-7">
                <p className="head">To solve the problem of people who wanted to cook, make them enjoy cooking whenever they want.</p>
                <p>เราจะแก้ปัญหาให้คนที่อยากทำอาหารเนื่องในโอกาสใดก็ตามได้ทำ สนุกกับการทำอาหารได้เมื่อพวกเค้าต้องการ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row detail">
          <div className="col-xs-12 col-md-8">
            <div className="row">
              <div className="col-xs-8 col-md-4">
                <div className="head-box">
                  What we do
                </div>
              </div>
              <div className="col-xs-12 col-md-7">
                <p className="head">เราจัดส่งเครื่องปรุงและวัตถุดิบสดใหม่ ที่ชั่งตวงไว้พอดีกับสูตรอาหารเด็ดๆ จากเชฟของเราถึงมือคุณ</p>
                <p>โดยคุณสามารถสั่งสินค้าล่วงหน้าอย่างน้อย 1 วัน (ตัดออเดอร์ 6 โมงเย็น) และรับสินค้าในวันถัดไป โดยสามารถนัดเวลาจัดส่งกับ admin ของเราได้ทุกช่องทาง</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row detail">
          <div className="col-xs-12 col-md-8">
            <div className="row">
              <div className="col-xs-8 col-md-4">
                <div className="head-box">
                  ช่องทางการสั่ง
                </div>
              </div>
              <div className="col-xs-12 col-md-7">
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
      </div>
    </Layout>
  </div>
);
