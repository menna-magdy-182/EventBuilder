import {fetchCategoriesApi} from 'api/categories.api';
import * as categoriesActions from './categories.slice';
import {all, call, put, takeLeading} from 'typed-redux-saga';

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

function* fetchCategoriesSaga() {
  try {
    yield call(sleep, 2000);
    const response = yield* call(fetchCategoriesApi);
    yield put(categoriesActions.fetchCategoriesSucceeded(response));
  } catch (error) {
    yield put(categoriesActions.fetchCategoriesFailed);
  }
}

export default function* categoriesSaga() {
  yield all([
    takeLeading(
      categoriesActions.fetchCategoriesRequested,
      fetchCategoriesSaga,
    ),
  ]);
}
