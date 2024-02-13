import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // TODO: To be removed after resolving all the non-serializable value issues
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
