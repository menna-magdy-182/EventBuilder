import {fetchCategoriesApi} from 'api/categories.api';
import * as categoriesActions from './categories.slice';
import {all, call, put, takeLeading} from 'typed-redux-saga';

function* fetchCategoriesSaga() {
  try {
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
