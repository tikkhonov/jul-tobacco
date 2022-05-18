import { FilterAndSortAction, FilterAndSortActionTypes, FilterAndSortState } from "../../types/types";

const initialState: FilterAndSortState = {
  filterBy: undefined,
  sortBy: 'popular',
}

export const filterAndSortReducer = (state = initialState, action: FilterAndSortAction): FilterAndSortState => {
  switch (action.type) {
    case FilterAndSortActionTypes.SET_SORT_BY:
      return { sortBy: action.payload }
    case  FilterAndSortActionTypes.SET_FILTER_BY:
      return { filterBy: action.payload }
    default:
      return state;
  }
}
