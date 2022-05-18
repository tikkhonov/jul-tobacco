import { ProductAction, ProductActionTypes, ProductState } from "../../types/types"

const initialState: ProductState = {
  items: [],
  isLoading: false,
  error: null
}

export const productsReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { isLoading: true, error: null, items: [] }
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { isLoading: false, error: null, items: action.payload }
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { isLoading: false, error: action.payload, items: [] }
    default: 
      return state
  }
}
