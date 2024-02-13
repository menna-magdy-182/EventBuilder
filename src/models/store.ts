import reducer from 'store/reducer';
import {ICategoryProduct} from './categories';

export type StoreState = Readonly<ReturnType<typeof reducer>>;

export interface FetchCategoryProductsRequestedPayload {
  categoryId: number;
}

export interface ProductsStoreState {
  selectedCategoryProducts: ICategoryProduct[];
  selectedCategoryId: number | undefined;
  loading: boolean;
  error: boolean;
}
