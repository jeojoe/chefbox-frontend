import React from 'react';
import Head from 'next/head';
import { Layout, CTASection, InstructionCard } from '../components';
import stylesheet from '../styles/pages/menu.css';

export default () => (
  <div id="menu-page">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Layout title="Menu | Chef Box Delivery : Ready to cook right at your home.">
      {/* Image for Mobile */}
      <div className="show-sm mobile-image" style={{ backgroundImage: 'url("/static/landing-2.jpg")' }} />

      <section className="header">
        <h1>สปาเก็ตตี้ คาโบนาร่า</h1>
        <h4>230 ฿</h4>
        <div className="contact">สั่งซื้อได้ที่ line : @chefbox.delivery หรือโทรมาที่เบอร์ 092-016-0836</div>
      </section>

      <section className="intro">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-10">
              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <div className="row" style={{ borderBottom: '1px solid #ddd' }}>
                    <div className="col-xs-4 attr">
                      <i className="material-icons">timer</i>
                      <p>ใช้เวลา</p>
                      <h3>20 นาที</h3>
                    </div>
                    <div className="col-xs-4 attr">
                      <i className="material-icons">local_pizza</i>
                      <p>แคลลอรี่</p>
                      <h3>600 kcal</h3>
                    </div>
                    <div className="col-xs-4 attr">
                      <i className="material-icons">local_dining</i>
                      <p>ความยาก</p>
                      <h3>ปานกลาง</h3>
                    </div>
                  </div>
                  <div className="row description">
                    <div className="col-xs-11">
                      เพราะเราได้ร่วมมือกับเชฟมือดีในการคิดค้นสูตรอาหาร พร้อมทั้งชั่งตวงทุกอย่างไว้ให้คุณเรียบร้อยแล้ว  เพราะเราได้ร่วมมือกับเชฟมือดีในการคิดค้นสูตาหารเพราะเราได้ร่วมมือกับเชฟมือดีในการคิดค้นสูตาหาร
                    </div>
                    {/* <div className="contact">สั่งซื้อได้ที่ line : @chefbox.delivery หรือโทรมาที่เบอร์ 092-016-0836</div> */}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-1" />
                <div className="col-xs-12 col-sm-6 hide-sm">
                  <img src="/static/menu.jpg" alt="1!!!!!! menu-name !!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ingredients">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-xs-10">
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-lg-3">
                  <div className="blue-box">
                    <div className="serving-size">
                      <i className="material-icons">person</i>
                      <p>ปริมานสำหรับ</p>
                      <h3>2 ท่าน</h3>
                    </div>
                    <div style={{ margin: '15px 0', borderBottom: '1px solid #fff' }} />
                    <div className="nutrient">
                      <p>โปรตีน</p>
                      <h3>24 กรัม</h3>
                    </div>
                    <div className="nutrient">
                      <p>คาร์โบไฮเดรต</p>
                      <h3>77 กรัม</h3>
                    </div>
                    <div className="nutrient">
                      <p>ไขมัน</p>
                      <h3>44 กรัม</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8 col-lg-9">
                  <div className="ingredients-detail">
                    <h2>วัตถุดิบทั้งหมด</h2>
                    <img src="/static/ingredients.png" alt="ingredients" />
                    <div className="row" style={{ padding: '0 15px' }} >
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">เส้นสปาเก็ตตี้</h5>
                        <p className="ingreds-amount">200 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">เบคอน</h5>
                        <p className="ingreds-amount">80 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">พาเมซานชีสขูด</h5>
                        <p className="ingreds-amount">40 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">ไข่แดง</h5>
                        <p className="ingreds-amount">2 ฟอง</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">วิปปิ้งครีม</h5>
                        <p className="ingreds-amount">200 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">กระเทียม</h5>
                        <p className="ingreds-amount">5 กลีบ</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">หัวหอมใหญ่</h5>
                        <p className="ingreds-amount">1 ลูก</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">เกลือ</h5>
                        <p className="ingreds-amount"></p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">พาสเลย์</h5>
                        <p className="ingreds-amount"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="instruction">
        <div className="container">
          <h2 className="section-header">วิธีทำอาหาร</h2>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <InstructionCard />
            </div>
            <div className="col-xs-12 col-md-6">
              <InstructionCard />
            </div>
            <div className="col-xs-12 col-md-6">
              <InstructionCard />
            </div>
            <div className="col-xs-12 col-md-6">
              <InstructionCard />
            </div>
            <div className="col-xs-12 col-md-6">
              <InstructionCard />
            </div>
            <div className="col-xs-12 col-md-6">
              <InstructionCard />
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <CTASection />
          </div>
        </div>
      </section>
    </Layout>
  </div>
);
