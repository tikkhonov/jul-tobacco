import { SetFilterAction, SetSortAction, FilterAndSortActionTypes, FilterAndSortState } from "../../types/types";

const initialState: FilterAndSortState = {
  filterBy: undefined,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
}

export const sortReducer = (state = initialState, action: SetSortAction): FilterAndSortState => {
  switch (action.type) {
    case FilterAndSortActionTypes.SET_SORT_BY:
      return { sortBy: action.payload}
    default:
      return state;
  }
}

export const filterReducer = (state = initialState, action: SetFilterAction): FilterAndSortState => {
  switch (action.type) {
    case  FilterAndSortActionTypes.SET_FILTER_BY:
      return { filterBy: action.payload}
    default:
      return state;
  }
}
