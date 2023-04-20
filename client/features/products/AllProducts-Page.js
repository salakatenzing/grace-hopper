import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import SingleProduct from './SingleProduct';
import SimpleSingleItem from './SimpleSingleItem';
import 'react-multi-carousel/lib/styles.css';
import { v4 as uuidv4 } from 'uuid';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, Link } from 'react-router-dom';

// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const dummyData = [
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
  {
    name: 'Carrot',
    img: 'https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg',
    price: 0.99,
  },
];

export default function AllProducts() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="p-5">
      <h2>Suggestions</h2>
      <Carousel
        className="w-75 m-auto"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        {dummyData.map((product) => (
          <SimpleSingleItem key={uuidv4()} product={product} />
        ))}
      </Carousel>

      <h2 className="mt-5">Fruits</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
      >
        {dummyData.map((product) => (
          <SingleProduct key={uuidv4()} product={product} />
        ))}
      </Carousel>
      <h2 className="mt-5">Vegetables</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10500}
      >
        {dummyData.map((product) => (
          <SingleProduct key={uuidv4()} product={product} />
        ))}
      </Carousel>
    </div>
  );
}

{
  /* <div className="fruits d-flex justify-content-center">
<span className=" border border-dark bg-light rounded w-25 p-3 d-flex justify-content-center">
  <div>
    <img
      src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"
      alt="product pic here"
      width="200px"
      height="170px"
      className="rounded"
    />
    <h5 className="text-dark">Carrots</h5>
    <h6>$1000/lb</h6>
    <button type="button" className="btn btn-primary">
      Add to Cart
    </button>
  </div>
</span>
</div> */
}
