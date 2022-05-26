import { Dispatch } from "redux";
import { CartActionTypes, SetCartAction } from "../../types/types";

export const setAddProductToCart = (payload: any) => {
  return async (dispatch: Dispatch<SetCartAction>) => {
    try {
      dispatch({
        type: CartActionTypes.SET_ITEMS_COUNT,
        payload,
      })
      dispatch({
        type: CartActionTypes.SET_TOTAL_PRICE,
        payload,
      })
      dispatch({
        type: CartActionTypes.SET_ADD_PRODUCTS_IN_CART,
        payload
      })
    } catch (e) {
      console.log(e);
    }
  }
}