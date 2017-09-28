import React from 'react';
import Head from 'next/head';
import { Layout, CTASection } from '../components';
import stylesheet from '../styles/pages/how-to-buy.css';

export default () => (
  <div id="how-to-buy-page">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Layout title="How to Buy | Chef Box Delivery : Ready to cook right at your home.">
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-xs-11 col-md-8">
            <h1>วิธีการสั่งซื้อ</h1>
          </div>
        </div>
        <div className="row step-wrapper" style={{ justifyContent: 'center' }}>
          <div className="col-xs-11 col-md-8">
            <div className="step">
              <div className="step-no">1</div>
              <div className="step-text">ติดต่อ Admin ของเราผ่านทาง Line@ (@Chefboxdelivery)</div>
            </div>
          </div>
        </div>
        <div className="row step-wrapper" style={{ justifyContent: 'center' }}>
          <div className="col-xs-11 col-md-8">
            <div className="step">
              <div className="step-no">2</div>
              <div className="step-text">เลือกเมนูอาหารผ่านทางหน้าเวปไซต์หรือจากที่ Admin ส่งให้</div>
            </div>
          </div>
        </div>
        <div className="row step-wrapper" style={{ justifyContent: 'center' }}>
          <div className="col-xs-11 col-md-8">
            <div className="step">
              <div className="step-no">3</div>
              <div className="step-text">รับวัตถุดิบที่ส่งตรงถึงคุณ</div>
            </div>
          </div>
        </div>
        <div className="row step-wrapper" style={{ justifyContent: 'center' }}>
          <div className="col-xs-11 col-md-8">
            <div className="step">
              <div className="step-no">4</div>
              <div className="step-text">สนุกกับการทำอาหาร และอิ่มใจไปกับรสชาตที่คุณทำเอง</div>
            </div>
          </div>
        </div>
        
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-xs-11 col-md-8">
            <h1>ช่องทางการสั่งซื้อ</h1>
            <div className="contact-box">
            Line@ ID : @Chefboxdelivery มี @ ด้วยนะค้า Facebook fan page : Chefbox.delivery (ทาง inbox นะคะ)
            </div>
            <p>ลูกค้าสามารถขอข้อมูล เมนู ผ่านช่องทางเหล่านี้ได้เลย และหากลูกค้าติดปัญหา หรือไม่เข้าใจในการทำอาหาร ก็สามาสอบถามวิธีการทำได้จากช่องทางนี้เช่นกัน</p>
          </div>
        </div>

        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-xs-11 col-md-8">
            <h1>เมนูและเงื่อนไขการสั่ง</h1>
            <p>ลูกค้าสามารถขอเมนูอาหารได้จาก Admin ของเราในทุกช่องทาง (FB/Line@) ทุกเมนูจะ มีลิงค์รายละเอียดและวิธีการทำที่อยู่บนเวปไซส์ของเราที่สามารถดูได้ทั้งบนคอมพิวเตอร์ และสทาร์ทโฟน
              <ol>
                <li>ลูกค้าสามารถสั่งอาหารล่วงหน้าได้อย่างน้อย 1 วัน และสั่งขั้นต่ำ 2 เมนูขึ้นไป</li>
                <li>เราจะปิดการรับออเดอร์ของทุกวันเวลา 6 โมงเย็น หากสั่งสายกว่า 6 โมงเย็นอาหารจะ ถูกจัดส่งให้ในวันมะรืน</li>
                <li>ทุกการจัดส่งจะมีค่าส่งจะอยู่ที่ xxx บาท แต่หากสั่งเกิน 1,000  บาทขึ้นไปต่อการส่ง 1 ครั้งจะฟรีค่าส่งทันที</li>
              </ol>
            </p>
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
