export interface IProduct {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  size: string;
  price: number;
  category: number;
  rating: number;
}

export interface ProductState {
  items: any[],
  isLoading: boolean,
  error: null | string 
}

// ProductReducer

export enum ProductActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

interface FetchProductAction {
  type: ProductActionTypes.FETCH_PRODUCTS
}

interface FetchProductSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: any[];
}

interface FetchProductErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction

// Sort and Filter Reducer

export interface FilterAndSortState {
  filterBy?: undefined | string;
  sortBy?: {
    type: string;
    order: string;
  };
}

export enum FilterAndSortActionTypes {
  SET_SORT_BY = "SET_SORT_BY",
  SET_FILTER_BY = "SET_FILTER_BY",
}

interface SortAction {
  type: FilterAndSortActionTypes.SET_SORT_BY;
  payload: {
    type: string,
    order: string,
  };
}

interface FilterAction {
  type: FilterAndSortActionTypes.SET_FILTER_BY;
  payload: string;
}

export type SetSortAction = SortAction
export type SetFilterAction = FilterAction