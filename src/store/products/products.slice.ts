import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  FetchCategoryProductsRequestedPayload,
  ProductsStoreState,
} from 'models/store';

const initialState: ProductsStoreState = {
  selectedCategoryProducts: [],
  selectedCategoryId: undefined,
  loading: false,
  error: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchCategoryProductsRequested: (
      state,
      action: PayloadAction<FetchCategoryProductsRequestedPayload>,
    ) => {
      state.loading = true;
      state.selectedCategoryId = action.payload.categoryId;
    },
    fetchCategoryProductsSucceeded: (state, action) => {
      state.loading = false;
      state.selectedCategoryProducts = action.payload.data;
    },
    fetchCategoryProductsFailed: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchCategoryProductsFailed,
  fetchCategoryProductsRequested,
  fetchCategoryProductsSucceeded,
} = productsSlice.actions;

export default productsSlice.reducer;
