import {createSlice} from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesList: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchCategoriesRequested: state => {
      state.loading = true;
    },
    fetchCategoriesSucceeded: (state, action) => {
      state.loading = false;
      state.categoriesList = action.payload.data;
    },
    fetchCategoriesFailed: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchCategoriesFailed,
  fetchCategoriesRequested,
  fetchCategoriesSucceeded,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
