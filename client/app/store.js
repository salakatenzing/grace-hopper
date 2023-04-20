import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from '../features/products/allProductsSlice';
import singleProductSlice from '../features/productDetail/singleProductSlice';
import productCardSlice from '../features/productCards/productCardSlice';

const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  allProducts: allProductsSlice,
  singleProduct: singleProductSlice,
  mainTypes: productCardSlice
});

export default store;
export * from '../features/auth/authSlice';
