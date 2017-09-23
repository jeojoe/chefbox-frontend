import React from 'react';
import Head from 'next/head';
import { Layout, CTASection } from '../components';
import stylesheet from '../styles/pages/menu.css';

export default () => (
  <div id="menu-page">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Layout title="Menu | Chef Box Delivery : Ready to cook right at your home.">
      <section className="header">
        <h1>แกงส้มชะอมทอด</h1>
        <h4>230 B</h4>
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
                <div className="col-xs-12 col-sm-6">
                  <img src="/static/landing-2.jpg" alt="1!!!!!! menu-name !!" />
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
                    <div className="row">
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">dinosaur kale</h5>
                        <p className="ingreds-amount">2 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">dinosaur kale</h5>
                        <p className="ingreds-amount">2 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">dinosaur kale</h5>
                        <p className="ingreds-amount">2 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">dinosaur kale</h5>
                        <p className="ingreds-amount">2 กรัม</p>
                      </div>
                      <div className="col-xs-6 col-md-4">
                        <h5 className="ingreds-name">dinosaur kale</h5>
                        <p className="ingreds-amount">2 กรัม</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container">
        <div className="row center-xs">
          <CTASection />
        </div>
      </section>
    </Layout>
  </div>
);
