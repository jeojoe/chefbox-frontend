import React from 'react';
import Head from 'next/head';

const LayoutAdmin = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" />
    </Head>
    <div className="container">
      <div className="header-wrapper justify-content-between">
        <h3 className="header">Chefbox Delivery : Admin</h3>
        {/* <button
          className="btn-primary"
          onClick={() => window.localStorage.removeItem('@chefbox-token')}
        >
            Logout
        </button> */}
      </div>
      { children }
    </div>
    <style jsx scoped>{`
      .container {
        padding: 50px 0;
      }
      .header-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .header {
        margin-bottom: 30px;
      }
    `}</style>
  </div>
);

export default LayoutAdmin;
