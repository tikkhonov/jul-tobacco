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

// productReducer
export interface ProductState {
  items: any[],
  isLoading: boolean,
  error: null | string 
}

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

// sortReducer & filterReducer

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

// cartReducer

export interface CartState {
  items: any;
  totalPrice: any;
  itemsCount: any;
}

export enum CartActionTypes {
  SET_TOTAL_PRICE = "SET_TOTAL_PRICE",
  SET_ITEMS_COUNT = "SET_ITEMS_COUNT",
  SET_ADD_PRODUCTS_IN_CART = "SET_ADD_PRODUCTS_IN_CART",
  SET_CART_CLEAR = "SET_CART_CLEAR",
  SET_PLUS_CART_ITEM = "SET_PLUS_CART_ITEM",
  SET_MINUS_CART_ITEM = "SET_MINUS_CART_ITEM",
}

interface PlusCartItemAction {
  type: CartActionTypes.SET_PLUS_CART_ITEM;
  payload: number;
}

interface MinusCartItemAction {
  type: CartActionTypes.SET_MINUS_CART_ITEM;
  payload: number;
}

interface CartClearAction {
  type: CartActionTypes.SET_CART_CLEAR;
  payload: {
    items: any;
  }
}

interface CartTotalPriceAction {
  type: CartActionTypes.SET_TOTAL_PRICE;
  payload: {
    totalPrice: number,
  }
}

interface AddProductsInCartAction {
  type: CartActionTypes.SET_ADD_PRODUCTS_IN_CART;
  payload: {
    id: number;
    name: string;
    size: string;
    price: number;
    imageURL: string;
  }
}

interface CartItemsCountAction {
  type: CartActionTypes.SET_ITEMS_COUNT;
  payload: {
    itemsCount: number,
  }
}

export type SetCartAction = 
CartItemsCountAction 
| CartTotalPriceAction 
| AddProductsInCartAction 
| CartClearAction
| MinusCartItemAction
| PlusCartItemAction