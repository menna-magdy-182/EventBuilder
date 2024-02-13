import {combineReducers} from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories.slice';
import productsReducer from './products/products.slice';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export default rootReducer;
