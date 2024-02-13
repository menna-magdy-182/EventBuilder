import endpoints from 'constants/endpoints';
import axiosInstance from './axiosInstance';

export const fetchCategoriesApi = () => {
  return axiosInstance.get(endpoints.categories);
};

export const fetchCategoryProductsApi = (categoryId: number) => {
  return axiosInstance.get(endpoints.categoryDetails(categoryId));
};
