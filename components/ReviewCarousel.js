import React from 'react';
import Head from 'next/head';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewCarousel = () => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </Head>
    <Carousel showStatus={false}>
      <div className="review-wrapper">
        <div className="row">
          <div className="col-12 col-md-7">
            <img src="/static/review-1.jpg" alt="Chefbox: Review" />
          </div>
          <div className="col-12 col-md-5">
            <div className="content">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/static/review-1.jpg"
                  alt="Chefbox: Review"
                  style={{ width: '45px', height: '45px' }}
                  className="review-person"
                />
                <a href="https://www.instagram.com/jaja_primrata/" target="__blank">jaja_primrata</a>
              </div>
              <p className="mb-3">สุขสันต์วันแม่ล่วงหน้าด้วยจากน้ำยาปูจาก Chefbox ขอบคุณน้องแอมมากๆค่ะ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="review-wrapper">
        <div className="row">
          <div className="col-12 col-md-7">
            <img src="/static/review-1.jpg" alt="Chefbox: Review" />
          </div>
          <div className="col-12 col-md-5">
            <div className="content">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/static/review-1.jpg"
                  alt="Chefbox: Review"
                  style={{ width: '45px', height: '45px' }}
                  className="review-person"
                />
                <a href="https://www.instagram.com/jaja_primrata/" target="__blank">jaja_primrata</a>
              </div>
              <p className="mb-3">สุขสันต์วันแม่ล่วงหน้าด้วยจากน้ำยาปูจาก Chefbox ขอบคุณน้องแอมมากๆค่ะ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="review-wrapper">
        <div className="row">
          <div className="col-12 col-md-7">
            <img src="/static/review-1.jpg" alt="Chefbox: Review" />
          </div>
          <div className="col-12 col-md-5">
            <div className="content">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/static/review-1.jpg"
                  alt="Chefbox: Review"
                  style={{ width: '45px', height: '45px' }}
                  className="review-person"
                />
                <a href="https://www.instagram.com/jaja_primrata/" target="__blank">jaja_primrata</a>
              </div>
              <p className="mb-3">สุขสันต์วันแม่ล่วงหน้าด้วยจากน้ำยาปูจาก Chefbox ขอบคุณน้องแอมมากๆค่ะ</p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    <style jsx>{`
      .review-wrapper {
        width: 100%;
        background-color: #f7f7f7;
      }
      .content {
        padding: 20px;
        text-align: left;
      }
      .content img {
        border-radius: 50%;
        margin-right: 12px;
      }
    `}</style>
  </div>
);

export default ReviewCarousel;
