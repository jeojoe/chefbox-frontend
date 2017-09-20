import React from 'react';
import Head from 'next/head';
import stylesheet from '../styles/components/FoodCard.css';

const FoodCard = ({ food }) => (
  <div className="food-card">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <div className="image" style={{ backgroundImage: 'url(https://media.blueapron.com/recipes/2511/c_main_dish_images/1503683201-7-0065-0427/925_2PP_Half-Chicken_82663_WEB_Center_high_menu_thumb.jpg)' }} />
    <div className="content">
      <h2>กระเพราะหมูกรอบ</h2>
      <h5>280 ฿</h5>
      <div className="details">
        <div className="time item">20 นาที</div>
        <div className="cals item">600 kcal</div>
        <div className="difficulty item">ง่าย</div>
      </div>
    </div>
  </div>
);

export default FoodCard;
