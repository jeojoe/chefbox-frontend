import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Link } from '../routes';
import stylesheet from '../styles/components/Layout.css';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class AuthMenu extends React.Component {
  state = {
    email: '',
    isLoggedIn: false,
  }
  componentDidMount() {
    const email = window.localStorage.getItem('@chefbox-email');
    if (email) this.setState({ isLoggedIn: true, email });
  }
  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return (
        <div className="box hide-sm" style={{ fontFamily: 'Mitr', textOverflow: 'ellipsis', width: '200px' }}>
          Hi, {window.localStorage.getItem('@chefbox-email')}
        </div>
      );
    }
    return (
      <div className="box hide-sm">
        <Link route="/login">
          <a className="button">เข้าสู่ระบบ</a>
        </Link>
        <Link route="/register">
          <a className="button accent">สมัครสมาชิค</a>
        </Link>
      </div>
    );
  }
}

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Mitr:300,400,500" rel="stylesheet" />
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" /> */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /> */}
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    {/* Navbar */}
    <nav id="nav" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <div className="left d-flex align-items-center">
          <Link route="/">
            <img src="/static/logo.png" height="65" alt="Chefbox Delivery Logo" className="logo" />
          </Link>
          <div className="hide-sm">
            <Link route="/menus">
              <a className="button">
                เมนูของเรา
              </a>
            </Link>
            <Link route="/about" className="hide-md">
              <a className="button">
                เกี่ยวกับเรา
              </a>
            </Link>
          </div>
        </div>
        <div className="right d-flex align-items-center">
          <Link route="/how-to-buy">
            <a className="button accent">
              <i className="material-icons">shopping_cart</i>
              วิธีการสั่งซื้อ
            </a>
          </Link>
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
                {/* <div className="img-wrapper">
                  <img src="https://static.line.naver.jp/line_regulation/files/ver2/LINE_Icon.png" alt="at Chef Box Delivery's Line" width="30" />
                </div> */}
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="box links">
                  <Link route="/">
                    <a>หน้าหลัก</a>
                  </Link>
                  <Link route="/menus">
                    <a>เมนูของเรา</a>
                  </Link>
                  <Link route="/how-to-buy">
                    <a>ขั้นตอนการสั่งซื้อ</a>
                  </Link>
                  <a>เข้าสู่ระบบ</a>
                  <a>สมัครสมาชิค</a>
                </div>
              </div>
              <div className="col-xs-12 col-md-3">
                <div className="box links">
                  <a>คำถามที่พบบ่อย</a>
                  <a>Terms & Privacy</a>
                  <Link route="/about">
                    <a>เกี่ยวกับเรา</a>
                  </Link>
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
