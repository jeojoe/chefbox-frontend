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
      <img className="show-sm mobile-image" src="/static/menus/chicken-humburg/main.jpg" alt="Chefbox : {menu name}" />

      <section className="header container">
        <div className="row">
          <div className="col-12 col-md-5">
            <h1 className="fancy-font">สปาเก็ตตี้ คาโบนาร่า</h1>
            <h4 className="price">230 ฿</h4>
            <div className="row attrs">
              <div className="col-6 col-lg-3 attr">
                <i className="material-icons">restaurant</i>
                <p>สำหรับ</p>
                <h6>2 คน</h6>
              </div>
              <div className="col-6 col-lg-3 attr">
                <i className="material-icons">timer</i>
                <p>ใช้เวลา</p>
                <h6>30-45 นาที</h6>
              </div>
              <div className="col-6 col-lg-3 attr">
                <i className="material-icons">whatshot</i>
                <p>ความเผ็ด</p>
                <h6>ไม่เผ็ด</h6>
              </div>
              <div className="col-6 col-lg-3 attr">
                <i className="material-icons">local_dining</i>
                <p>ความยาก</p>
                <h6>ปานกลาง</h6>
              </div>
            </div>
            <p className="description">
              เนื้อไก่เป็นเนื้อที่ให้โปรตีนค่อนข้างสูง โดยปกติเราก็กินไก่เป็นส่วนๆ เช่นอกหรือสะโพก หลังจากได้ลองไปชิมเมนูนี้ถึงที่ญี่ปุ่น แล้วรู้สึกชอบมาก ในจานเสิร์ฟแบบไม่ซับซ้อน แฮมเบิร์กไก่ ทอดมาออกกรอบๆ ชุ่มด้วยซอสแบบญี่ปุ่นแบบพิเศษ มากับข้าวสวยร้อนๆ ทานคู่กับแครอทที่ผัดมาในซอสเดียวกัน กรอบ หอม หวาน ก็กลับมาลองทำ ปรับรสชาตให้เป็นแบบที่เราชอบ ตอนนี้คุณก็สามารถทำเมนูนี้ทานเองได้ ราวกับทานที่ญี่ปุ่นเลยทีเดียว
            </p>
            <div className="contact">สั่งซื้อได้ที่ line : @chefbox.delivery หรือโทรมาที่เบอร์ 092-016-0836</div>
          </div>
          <div className="col-12 col-md-1" />
          <div className="col-12 col-md-6 hide-sm">
            <img src="/static/menus/chicken-humburg/main.jpg" alt="1!!!!!! menu-name !!" style={{ width: '100%' }} />
          </div>
        </div>
      </section>
      <hr />
      <section className="ingredients container">
        <h2 className="fancy-font main-color-font">วัตถุดิบ (ภายในกล่อง)</h2>
        <div className="row">
          <div className="col-12 col-md-8">
            <img src="/static/menus/chicken-humburg/ingredients.jpg" alt="ingredients" style={{ width: '100%' }} />
          </div>
          <div className="col-12 col-md-3" style={{ paddingTop: '20px' }}>
            <p className="ingreds-label fancy-font">วัตถุดิบสำหรับหมักไก่</p>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">สันในไก่บดละเอียด</h5>
              <p className="ingreds-amount">300 กรัม</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">หอมหัวใหญ่ลูกเล็ก</h5>
              <p className="ingreds-amount">1 ลูก</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">ไข่ไก่</h5>
              <p className="ingreds-amount">1 ฟอง</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">น้ำมันงา</h5>
              <p className="ingreds-amount">1/2 ช้อนชา</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">สาเก</h5>
              <p className="ingreds-amount">2 ช้อนโต้ะ</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">น้ำตาลทราย</h5>
              <p className="ingreds-amount">1 ช้อนชา</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">น้ำมันพืช</h5>
              <p className="ingreds-amount">4 ช้อนโต้ะ</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">แป้งอเนกประสงค์</h5>
              <p className="ingreds-amount">1/3 ถ้วย</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">ข้าวสวย</h5>
              <p className="ingreds-amount">175 กรัม</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">แครอท</h5>
              <p className="ingreds-amount">1/2 หัว</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">เกลือป่น</h5>
              <p className="ingreds-amount">&nbsp;</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">พริกไทยป่น</h5>
              <p className="ingreds-amount">&nbsp;</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">สลัด</h5>
              <p className="ingreds-amount">&nbsp;</p>
            </div>
            <p className="ingreds-label fancy-font">วัตถุดิบสำหรับทำซอส</p>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">มิริน</h5>
              <p className="ingreds-amount">4 ช้อนโต้ะ</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">สาเกญี่ปุ่น</h5>
              <p className="ingreds-amount">4 ช้อนชา</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">น้ำตาลทราย</h5>
              <p className="ingreds-amount">4 ช้อนโต้ะ</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="ingreds-name">ซี่อิ๋วญี่ปุ่น</h5>
              <p className="ingreds-amount">4 ช้อนโต้ะ</p>
            </div>
          </div>
          <div className="col-12 col-md-1" />
        </div>
      </section>

      <section className="kitchen-items container">
        <h2 className="fancy-font main-color-font kitchen-item-header">อุปกรณ์ครัว</h2>
        <div className="row">
          <div className="col-12">
            <div className="kitchen-item">
              เตาไฟฟ้า
            </div>
            <div className="kitchen-item">
              กระทะ
            </div>
            <div className="kitchen-item">
              เขียง
            </div>
            <div className="kitchen-item">
              มีด
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="instructions container">
        <h2 className="fancy-font main-color-font">วิธีการทำอาหาร</h2>
        <div className="row">
          <div className="col-12 col-md-6 step">
            <img src="/static/menus/chicken-humburg/step-1.jpg" className="step-img" alt="Chefbox : instruction 1" />
            <h4 className="fancy-font main-color-font">1. เตรียมวัตถุดิบ</h4>
            <hr className="small" />
            <p>1. หั่นแครอทเป็นลูกเต๋า ขนาดประมาณ 1 ซม.<br />
          2. หั่นหัวหอมใหญ่เป็นลูกเต๋าเล็กๆประมาณครึ่งเซนติเมตร<br />
          3. แยกไข่แดงออกจากไข่ขาว</p>
          </div>
          <div className="col-12 col-md-6 step">
            <img src="/static/menus/chicken-humburg/step-2.jpg" className="step-img" alt="Chefbox : instruction 2" />
            <h4 className="fancy-font main-color-font">2. หมักเนื้อไก่</h4>
            <hr className="small" />
            <p>นำส่วนผสมสำหรับหมักไก่ ใส่ทุกอย่างลงในถ้วย จากนั้นนวดส่วนผสมในถ้วยจนเข้ากัน แล้วนำส่วนผสมที่ผสมเสร็จแล้ว ไปเข้าตู้เย็นช่องแช่แข็งอย่างน้อย 5 นาที เพื่อให้เซ็ทตัว</p>
          </div>
          <div className="col-12 col-md-6 step">
            <img src="/static/menus/chicken-humburg/step-3.jpg" className="step-img" alt="Chefbox : instruction 3" />
            <h4 className="fancy-font main-color-font">3. ปั้นเนื้อไก่</h4>
            <hr className="small" />
            <p>นำไก่ออกมาจากตู้เย็น แบ่งไก่ที่ผสมแล้วออกเป็น 6 ส่วนเท่าๆกัน (ประมาณส่วนละ 30 กรัม) ปั้นเป็นก้อนกลมๆ แล้วค่อยๆกดเนื้อไก่ให้แบนออก อย่าให้หนา หรือบางเกินไป</p>
          </div>
          <div className="col-12 col-md-6 step">
            <img src="/static/menus/chicken-humburg/step-4.jpg" className="step-img" alt="Chefbox : instruction 4" />
            <h4 className="fancy-font main-color-font">4. คลุกแป้ง</h4>
            <hr className="small" />
            <p>แล้วนำไปคลุกลงในแป้งสาลีเอนกประสงค์เล็กน้อยให้พอเคลือบรอบไก่บางๆ จากนั้นนำไปเรียงใส่จาน(ควรโรยแป้งไว้บนจานเล็กน้อย เพื่อกันไม่ให้เนื้อไก่ติดกับจาน) ทำจนให้ครบ 6 ก้อน แล้วนำเข้าตู้เย็นเพื่อให้ไก่เซตตัวอีกครั้งก่อนลงทอด</p>
          </div>
          <div className="col-12 col-md-6 step">
            <img src="/static/menus/chicken-humburg/step-5.jpg" className="step-img" alt="Chefbox : instruction 5" />
            <h4 className="fancy-font main-color-font">5. ทำซอส</h4>
            <hr className="small" />
            <p>ระหว่างรอเนื้อไก่เซ็ทตัว ให้เตรียมซอสโดยตั้งกระทะใช้ไฟกลาง ใส่มิรินและสาเกลงไป ต้มให้เดือดแล้วทิ้งไว้ให้แอลกอฮอล์ระเหยประมาณ 30 วินาที จากนั้นใส่น้ำตาลทราย และซีอิ๊วญี่ปุ่น ต้มจนเดือด ลดไฟให้อ่อน แล้วคนไปเรื่อยๆ จนซอสเริ่มข้นและค่อยปิดไฟ (เมื่อซอสเย็นลงจะข้นขึ้นอีกเล็กน้อย)</p>
          </div>
          <div className="col-12 col-md-6 step">
            <img src="/static/menus/chicken-humburg/step-6.jpg" className="step-img" alt="Chefbox : instruction 6" />
            <h4 className="fancy-font main-color-font">6. ทอดไก่ และผัดแครอท</h4>
            <hr className="small" />
            <p>นำไก่ออกมาจากตู้เย็น ตั้งกระทะด้วยไฟกลางค่อนไปทางอ่อน ใส่น้ำมันพืชแล้วรอให้น้ำมันร้อน จากนั้นนำแครอท ลงไปทอดในกระทะ และนำไก่ที่เตรียมไว้ลงทอดบนกระทะจนไก่สุกทั้ง 2 ด้าน ใช้แปรงหรือช้อนทาซอสให้ทั่วทั้งสองด้านของไก่ และราดซอสบางส่วนลงไปบนแครอท ตักทั้งไก่กับแครอทขึ้นพักไว้ แล้วเตรียมจัดการได้เลย</p>
          </div>
        </div>
      </section>
    </Layout>
  </div>
);
