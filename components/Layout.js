import React from 'react';
import Head from 'next/head';
import { Link } from '../routes';
import stylesheet from '../styles/components/Layout.css';

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Mitr:300,400,500" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /> */}
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    {/* Navbar */}
    <nav id="nav">
      <div className="container" style={{ height: '100%' }}>
        <div className="row between-xs" style={{ height: '100%' }}>
          <div className="col-xs-5 middle-xs">
            {/* md */}
            <div className="box hide-sm">
              <Link route="menus">
                <a className="button">
                  <i className="material-icons">restaurant</i>
                  เมนูของเรา
                </a>
              </Link>
              <Link route="how-to-buy">
                <a className="button" >
                  <i className="material-icons">shopping_cart</i>
                  วิธีการสั่งซื้อ
                </a>
              </Link>
            </div>
            {/* sm */}
            <div className="box show-sm">
              <Link route="menus">
                <a className="button">
                  <i className="material-icons">restaurant</i>
                  เมนูของเรา
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xs-2 middle-xs center-xs">
            <div className="box">
              <Link route="/">
                <img src="/static/logo.png" className="logo" alt="Chefbox Delivery : Ready to Cook" style={{ cursor: 'pointer' }} />
              </Link>
            </div>
          </div>
          <div className="col-xs-5 middle-xs end-xs">
            <div className="box hide-sm">
              <a className="button">เข้าสู่ระบบ</a>
              <a className="button accent">สมัครสมาชิค</a>
            </div>
            <div className="box show-sm">
              <Link route="how-to-buy">
                <a className="button" >
                  <i className="material-icons">shopping_cart</i>
                  วิธีการสั่งซื้อ
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="spacer" />

    { children }

    <footer id="footer">
      <div className="container">
        <div className="row around-xs">
          <div className="col-xs-12 col-md-3 company">
            <img src="/static/logo.png" alt="Chef Box Delivery : Ready to Cook" className="logo" />
            <h5>Chef Box Delivery - Ready to Cook</h5>
            <p>วัตุดิบทำอาหารสำเร็จรูป ส่งตรงถึงบ้านคุณง่ายๆ สนุกกับการทำอาหารได้อย่างเต็มที่ !</p>
            <p>chefbox.delivery@gmail.com, 090-686-6563</p>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <div className="col-xs-12 col-md-5">
                <h5>Follow Us on</h5>
                {/* <i className="fa fa-facebook-official" ariaHidden="true" />
                <i className="fa fa-instagram" ariaHidden="true" />
                <i className="fa fa-twitter" ariaHidden="true" /> */}
                <div className="img-wrapper">
                  <img src="https://static.line.naver.jp/line_regulation/files/ver2/LINE_Icon.png" alt="at Chef Box Delivery's Line" width="30" />
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="box links">
                  <a>หน้าหลัก</a>
                  <a>เมนูของเรา</a>
                  <a>ขั้นตอนการสั่งซื้อ</a>
                  <a>เข้าสู่ระบบ</a>
                  <a>สมัครสมาชิค</a>
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="box links">
                  <a>คำถามที่พบบ่อย</a>
                  <a>Terms & Privacy</a>
                  <a>เกี่ยวกับเรา</a>
                  <p>© CHEF BOX DELIVERY 2017</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xs-12 col-md-3">
            <div className="box watermark">
              <p>© CHEF BOX DELIVERY 2017, Alright Reserved.</p>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
