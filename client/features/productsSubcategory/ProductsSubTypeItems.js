import React, { useEffect, useState } from 'react';
import SingleProductDetail from '../productDetail/SingleProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductSubtype,
  selectProductSubtypeItems,
} from './productSubTypeSlice';
import { useParams } from 'react-router';
import { addToCart } from '../Cart/cartSlice';

export default function ProductsSubTypeItems() {
  const dispatch = useDispatch();
  const subTypeItems = useSelector(selectProductSubtypeItems);
  const { maintype } = useParams();
  const { subtype } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});
  const renderLabel = () => {
    const split = subtype.split('');
    if (split.includes('-')) {
      const dash = split.indexOf('-');
      split[dash] = ' ';
      split[dash + 1] = split[dash + 1].toUpperCase();
    }
    split[0] = split[0].toUpperCase();
    return split.join('');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const productId = event.target.id;
    const quantity = 1;
    dispatch(addToCart({ quantity, productId, token }));
  };

  useEffect(() => {
    dispatch(fetchProductSubtype({ maintype, subtype }));
  }, [dispatch]);

  return (
    <div className="d-flex p-2 flex-column align-items-center">
      <h1
        style={{
          fontWeight: 'bold',
        }}
      >
        {renderLabel()}
      </h1>
      <hr />
      <div className="row justify-content-center">
        {subTypeItems.map((product) => {
          return (
            <div
              className="card p-2"
              style={{ width: '18rem' }}
              key={product.product.id}
            >
              <div
                className="card-deck flex-column "
                onClick={() => setCurrentProduct(product.product)}
              >
                <img
                  className="card-img-top p-3"
                  src={product.product.image}
                  alt="Card image cap"
                  width="16rem"
                  height="200rem"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                />
                <div
                  className="card-body flex-column align-items-center bg-light"
                  style={{ textAlign: 'center' }}
                >
                  <h5 className="card-title">{product.product.name}</h5>
                  <p>
                    <small className="text-muted">
                      ${product.product.price}/ea.
                    </small>
                  </p>
                  <p className="card-text-sub p-2" style={{ overflow: 'auto' }}>
                    {product.product.description.length > 50
                      ? product.product.description.slice(0, 50) + '...'
                      : product.product.description}
                  </p>
                  <button
                    type="submit"
                    id={product.product.id}
                    onClick={handleSubmit}
                    className="btn btn-primary "
                  >
                    +{' '}
                    <i
                      id={product.product.id}
                      className="bi bi-basket me-1 fs-3 text-light"
                    ></i>{' '}
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <SingleProductDetail product={currentProduct} />
      </div>
    </div>
  );
}
