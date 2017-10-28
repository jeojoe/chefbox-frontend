import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import Head from 'next/head';
import { LayoutAdmin, AdminMenus } from '../../components';
import { Auth } from '../../services';

class Admin extends Component {
  state = {
    email: '',
    password: '',
    submitting: false,
    isLoggedIn: false,
  }

  componentDidMount() {
    const token = window.localStorage.getItem('@chefbox-token');
    if (token) {
      const decoded = jwt.decode(token);
      if (decoded && decoded.isAdmin) {
        this.setState({ isLoggedIn: true });
      }
    }
  }

  _submit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({ submitting: true });
    Auth.login(email, password, { admin_login: true })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('@chefbox-token', res.data.token);
        this.setState({ submitting: false, isLoggedIn: true });
      })
      .catch((err) => {
        this.setState({ submitting: false });
        alert(err);
      });
  }

  render() {
    const { email, password, isLoggedIn, submitting } = this.state;

    if (!isLoggedIn) {
      return (
        <LayoutAdmin title="admin- Chefbox Delivery">
          <div style={{ display: 'flex' }}>
            <Head>
              <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
              <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" />
              <title>Admin - Chefbox Delivery</title>
            </Head>
            <form onSubmit={this._submit}>
              <div style={{ textAlign: 'center' }}>
                <img src="/static/logo.png" width="100" alt="Chefbox Delivery" />
                <input
                  className="form-control"
                  type="email" placeholder="Email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                  className="form-control"
                  type="password" placeholder="Password"
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit" className="btn btn-primary">
                  {submitting ? 'Logging in..' : 'Login'}
                </button>
              </div>
            </form>
            <style jsx scoped>{`
              form {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
              }
              input {
                padding: 5px 10px;
                border-radius: 5px; 
                display: block;
                font-size: 16px;
                margin-bottom: 10px;
              }
              img {
                margin: 0 auto 30px;
              }
            `}</style>
          </div>
        </LayoutAdmin>
      );
    }

    return (
      <LayoutAdmin>
        <div className="row">
          <div className="col-12 col-sm-2">
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-info">
                Users
              </button>
              <button type="button" className="btn btn-info">
                Menus
              </button>
            </div>
            <style jsx scoped>{`
              .btn-group-vertical {
                width: 100%;
              }
              .btn-group-vertical .btn-info {
                padding: 10px 25px;
              }
            `}</style>
          </div>
          <div className="col-12 col-sm-10">
            <AdminMenus />
          </div>
        </div>
      </LayoutAdmin>
    );
  }
}

export default Admin;
