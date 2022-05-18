

export const setSortBy = ({name}: {name: any}) => ({
  type: 'SET_SORT_BY',
  payload: name,
})

export const setFilterBy = ({filtIndex}: {filtIndex: any}) => ({
  type: 'SET_FILTER_BY',
  payload: filtIndex,
})
