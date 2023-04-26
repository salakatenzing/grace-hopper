/* eslint-disable react/prop-types */
import React from 'react';

export default function PromoCard({ promo }) {
  console.log('HERE IS MY PROMO, ', promo);
  return (
    <div
      className={
        promo.id === 1
          ? 'carousel-item active bg-success bg-gradient'
          : 'carousel-item bg-success bg-gradient'
      }
    >
      <svg
        className="bd-placeholder-img"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect
          width="100%"
          height="100%"
          fill="var(--bs-secondary-color)"
        ></rect>
      </svg>
      <div className="container">
        <div className="carousel-caption text-start">
          <h3>{promo.title}</h3>
          <h5>{promo.description}</h5>
        </div>
      </div>
    </div>
  );
}
