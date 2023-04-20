import React from 'react';

export default function PromoCard({ value }) {
  console.log(value);

  return (
    <div className={value === 0 ? 'carousel-item active' : 'carousel-item'}>
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
          <h1>Example headline.</h1>
          <p>
            Some representative placeholder content for the first slide of the
            carousel.
          </p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              Sign up today
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
