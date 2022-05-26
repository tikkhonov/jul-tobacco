import { combineReducers } from 'redux'

import { cartReducer } from './cart'
import { filterReducer, sortReducer } from './filters'
import { productsReducer } from './products'

export const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  products: productsReducer,
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>