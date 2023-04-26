import React from 'react';
import PromoCard from './PromoCard';
import { v4 as uuidv4 } from 'uuid';

const promotionsData = [
  {
    id: 1,
    title: 'Get 20% off your first order',
    description: 'Use code WELCOME20 at checkout',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Promotion%201',
  },
  {
    id: 2,
    title: 'Free shipping on orders over $50',
    description: 'No code needed. Discount applied at checkout.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Promotion%202',
  },
  {
    id: 3,
    title: 'Buy one, get one 50% off',
    description: 'Discount applied to item of equal or lesser value.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Promotion%203',
  },
];

export default function Promotions() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner">
        {promotionsData.map((promo) => {
          return <PromoCard key={uuidv4()} promo={promo} />;
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
