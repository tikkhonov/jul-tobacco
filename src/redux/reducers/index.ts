import { combineReducers } from 'redux'

import { filterAndSortReducer } from './filters'
import { productsReducer } from './products'

export const rootReducer = combineReducers({
  filterAndSort: filterAndSortReducer,
  products: productsReducer
})

export type RootState = ReturnType<typeof rootReducer>