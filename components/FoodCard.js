import React from 'react';
import Head from 'next/head';
import { Link } from '../routes';
import stylesheet from '../styles/components/FoodCard.css';

const FoodCard = ({ name, slug, price, servings, time, spicy }) => (
  <Link route={`/menu/${slug}`}>
    <div className="food-card">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <div className="image" style={{ backgroundImage: `url("/static/menus/${slug}/thumbnail.jpg")` }} />
      <div className="content">
        <div style={{ height: '80px', marginBottom: '20px' }}>
          <h2 style={{ maxHeight: '54px', overflow: 'hidden' }}>{name}</h2>
          <h6>{price} ฿</h6>
        </div>
        <div className="details">
          <div className="time item">
            <i className="material-icons">timer</i>
            {time}
          </div>
          <div className="cals item">{servings} คน</div>
          <div className="cals item">{spicy}</div>
        </div>
      </div>
    </div>
  </Link>
);

export default FoodCard;
