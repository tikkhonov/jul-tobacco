import { Dispatch } from "redux"
import { SetFilterAction, SetSortAction, FilterAndSortActionTypes } from "../../types/types"

export const setFilterBy = (payload: any) => {
  return async (dispatch: Dispatch<SetFilterAction>) => {
    try {
      dispatch({
        type: FilterAndSortActionTypes.SET_FILTER_BY,
        payload,
      })
    } catch (e) {
      console.log(e);
    }
  }
}

export const setSortBy = ({ type, order }: any) => {
  return async (dispatch: Dispatch<SetSortAction>) => {
    try {
      dispatch({
        type: FilterAndSortActionTypes.SET_SORT_BY,
        payload:{ type, order },
      })
    } catch (e) {
      console.log(e);
    }
  }
}
