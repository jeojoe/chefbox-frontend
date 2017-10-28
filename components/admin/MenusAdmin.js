import React, { Component } from 'react';
import Link from 'next/link';

class Menus extends Component {
  state = {
    hey: '.',
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <Link href="/admin/add-menu">
            <a className="d-flex justify-content-end btn-container">
              <button
                type="button"
                className="btn btn-success"
              >
                + Add Menu
              </button>
              <style jsx scoped>{`
                .btn-container {
                  margin-bottom: 15px;
                }
              `}</style>
            </a>
          </Link>
        </div>
        <div className="col-12">
          <div className="card">
            <img className="card-img-top" src="..." alt="Card" />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card" />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card" />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menus;
