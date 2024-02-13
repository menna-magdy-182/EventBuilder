import reducer from 'store/reducer';
import {ICartProduct, ICategoryProduct} from './categories';

export type StoreState = Readonly<ReturnType<typeof reducer>>;

export interface FetchCategoryProductsRequestedPayload {
  categoryId: number;
}

export interface ProductsStoreState {
  selectedCategoryProducts: ICategoryProduct[];
  selectedCategoryId: number | undefined;
  cartProducts: ICartProduct[];
  loading: boolean;
  error: boolean;
}
