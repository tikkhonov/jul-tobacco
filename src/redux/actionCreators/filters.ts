import { Dispatch } from "redux"
import { FilterAndSortAction, FilterAndSortActionTypes } from "../../types/types"

export const setFilterBy = (filtIndex: any) => {
  return async (dispatch: Dispatch<FilterAndSortAction>) => {
    try {
      dispatch({
        type: FilterAndSortActionTypes.SET_FILTER_BY,
        payload: filtIndex
      })
    } catch (e) {
      console.log(e);
    }
  }
}

export const setSortBy = (index: any) => {
  return async (dispatch: Dispatch<FilterAndSortAction>) => {
    try {
      dispatch({
        type: FilterAndSortActionTypes.SET_SORT_BY,
        payload: index
      })
    } catch (e) {
      console.log(e);
    }
  }
}
