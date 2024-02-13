import {fetchCategoryProductsApi} from 'api/categories.api';
import * as productsActions from './products.slice';
import {all, call, put, takeLeading} from 'typed-redux-saga';
import {PayloadAction} from '@reduxjs/toolkit';
import {FetchCategoryProductsRequestedPayload} from 'models/store';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

function* fetchCategoryProductsSaga(
  action: PayloadAction<FetchCategoryProductsRequestedPayload>,
) {
  try {
    const {categoryId} = action.payload;
    yield call(sleep, 2000);
    const response = yield* call(fetchCategoryProductsApi, categoryId);
    yield put(productsActions.fetchCategoryProductsSucceeded(response));
  } catch (error) {
    yield put(productsActions.fetchCategoryProductsFailed);
  }
}

export default function* productsSaga() {
  yield all([
    takeLeading(
      productsActions.fetchCategoryProductsRequested,
      fetchCategoryProductsSaga,
    ),
  ]);
}
