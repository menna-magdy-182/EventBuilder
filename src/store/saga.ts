import {fork} from 'redux-saga/effects';
import categoriesSaga from './categories/categories.saga';
import productsSaga from './products/products.saga';

export default function* rootSaga() {
  try {
    yield fork(categoriesSaga);
    yield fork(productsSaga);
  } catch (e) {
    __DEV__ && console.log(e);
  }
}
