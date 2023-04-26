import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import SingleProduct from './SingleProduct';
import SimpleSingleItem from './SimpleSingleItem';
import { fetchMainCategory, selectAllProducts } from './allProductsSlice';
import 'react-multi-carousel/lib/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import SingleProductDetail from '../productDetail/SingleProductDetail';


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
  const dispatch = useDispatch()
  // const location = useLocation()
  const [subTypes, setSubTypes] = useState([])

  const allProducts = useSelector(selectAllProducts)
  const {maintype} = useParams()
  const [currentProduct, setCurrentProduct] = useState({})

  const renderLabel = (title) => {
    const split = title.split('')
    if (split.includes('-')) {
      const dash = split.indexOf('-')
      split[dash] = ' '
      split[dash + 1] = split[dash + 1].toUpperCase()
    }
    split[0] = split[0].toUpperCase()
    return split.join('')
  }

  useEffect(() => {
    switch(maintype){
      case 'produce':
        setSubTypes(['fruit', 'vegetable', 'other'])
        break
      case 'meat':
        setSubTypes(['seafood', 'pork', 'poultry', 'beef', 'other'])
        break
      case 'dairy-eggs':
        setSubTypes(['milk', 'eggs', 'cheese', 'yogurt', 'butter', 'other'])
        break;
      case 'beverages':
        setSubTypes(['water', 'soda', 'coffee', 'tea', 'juice', 'other'])
        break;
      case 'dried-goods':
        setSubTypes(['grains', 'canned-goods', 'pasta', 'other'])
        break;
      default:
        return
      }
      dispatch(fetchMainCategory(maintype))
  }, [dispatch])

  return (
    <div className="p-5 d-flex flex-column align-content-center">
      <h2>Suggestions</h2>
      <Carousel
        className="w-75 m-auto"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        {allProducts && allProducts
        .map((product) => (
          <SimpleSingleItem key={uuidv4()} product={product.product} />
        ))}
      </Carousel>

      {subTypes && subTypes.map((title)=> {
        return (
          <>
          <Link to={`/products/${maintype}/${title}`}><h2 key={uuidv4()} className="mt-5">{renderLabel(title)}</h2></Link>
          <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
        >
          {allProducts && allProducts
          .filter((product)=> {
            return (product.sub_type === title)
          })
          .map((product) => (
            <div key={uuidv4()} onClick={() => setCurrentProduct(product.product)}>
              <SingleProduct  product={product.product} />
            </div>
          ))}
        </Carousel>
          <SingleProductDetail product={currentProduct} />
          <hr />
        </>
        )
      })}
    </div>
  );
}
