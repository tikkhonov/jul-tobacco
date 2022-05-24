import { combineReducers } from 'redux'

import { filterReducer, sortReducer } from './filters'
import { productsReducer } from './products'

export const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  products: productsReducer,
})

export type RootState = ReturnType<typeof rootReducer>