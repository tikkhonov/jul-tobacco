import axios from "axios"
import { Dispatch } from "redux"
import { ProductAction, ProductActionTypes } from "../../types/types"

export const fetchProducts = (address: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS
      })
      const response = await axios.get(`http://localhost:3004/${address}`)
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, 
        payload: response.data
      }) 
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR, 
        payload: 'Произошла ошибка при загрузке продуктов :('
      })
    }
  }
}