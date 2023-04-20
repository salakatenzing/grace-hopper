import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from '../features/products/allProductsSlice';
import singleProductSlice from '../features/productDetail/singleProductSlice';
import productCardSlice from '../features/productCards/productCardSlice';
import productSubTypeSlice from '../features/productsSubcategory/productSubTypeSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    allProducts: allProductsSlice,
    singleProduct: singleProductSlice,
    mainTypes: productCardSlice,
    productSubTypeItems: productSubTypeSlice 
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default store;
export * from '../features/auth/authSlice';
