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
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
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
        <div className="row">
          <div className="col-xs-12 col-md-3 company">
            <img src="/static/logo.png" alt="Chef Box Delivery : Ready to Cook" className="logo" />
            <h1>Chef Box Delivery</h1>
            <p>ประสบการณ์ใหม่ในการทำอาหาร ส่งตรงถึงบ้านคุณ สนุกกับการทำอาหารได้อย่างเต็มที่ !</p>
            <p>chefbox.delivery@gmail.com, 090-686-6563</p>
          </div>
          <div className="col-xs-12 col-md-9">
            <div className="row">
              <div className="col-xs-12 col-md-6 offset-md-3">
                <h5 className="fancy-font main-color-font">ติดตามเราได้ที่</h5>
                <div className="social">
                  <img src="/static/line.png" alt="line" style={{ width: '40px', height: '40px' }} />
                  <p>Line: @chefbox.delivery</p>
                </div>
                <div className="social">
                  <i className="fa fa-facebook-official" ariaHidden="true" />
                  <p>Facebook: Chefbox Delivery</p>
                </div>
                <div className="social">
                  <i className="fa fa-instagram" ariaHidden="true" />
                  <p>Instagram: @chefbox.delivery</p>
                </div>
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
                  <a>คำถามที่พบบ่อย</a>
                  <Link route="/about">
                    <a>เกี่ยวกับเรา</a>
                  </Link>
                  <p>© CHEF BOX DELIVERY 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
