import { combineReducers } from 'redux'

import { filterAndSortReducer } from './filters'
import { productsReducer } from './products'

export const rootReducer = combineReducers({
  filterAndSortReducer,
  productsReducer
})
