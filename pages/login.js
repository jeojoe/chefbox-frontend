import React, { Component } from 'react';
import Head from 'next/head';
import { Layout } from '../components';
import stylesheet from '../styles/pages/login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  render() {
    const { email, password } = this.state;

    return (
      <Layout title="Login | Chef Box Delivery : Ready to cook right at your home.">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <div className="container">
          <div className="row" style={{ minHeight: '500px' }}>
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <div className="login-wrapper">
                <h1 className="header">Welcome Back !</h1>
                <p className="text">Let's enjoy cooking more.</p>
                <input
                  type="text" placeholder="อีเมล"
                  value={email} className="form-control"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                  type="password" placeholder="รหัสผ่าน"
                  value={password} className="form-control"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <div className="btn btn-success">
                  เข้าสู่ระบบ
                </div>
              </div>
            </div>
            {/* <div className="col-md-1 justify-content-center align-items-center d-flex">หรือ</div>
            <div className="col-md-6" style={{ backgroundColor: '#11346b' }}></div> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
