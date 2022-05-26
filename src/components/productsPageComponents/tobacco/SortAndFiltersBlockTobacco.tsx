import React, { FC } from 'react'

import FilterBlockTobacco from './FilterBlockTobacco'
import SortBlockTobacco from './SortBlockTobacco'

import { useFilterActions } from '../../../hooks/useActions';

interface SortAndFilters {
  sortBy: any;
  filterBy: any;
}

const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name: 'алфавиту', type: 'name', order: 'asc'}
]
const filterItems = ['Фрукты', 'Выпечка', 'Ягоды', 'Разное', 'Травы']

const SortAndFiltersBlockTobacco: FC<SortAndFilters> = ({ sortBy, filterBy}) => {
  const { setSortBy } = useFilterActions()
  const { setFilterBy } = useFilterActions() 
  
  const activeSortItem = React.useCallback((item: any) => {
    setSortBy(item)
  }, [setSortBy])

  const activeFilterItem = React.useCallback((filtIndex: string) => {
    setFilterBy(filtIndex)
  }, [setFilterBy])
  
  return (
    <div className="sort-and-filters-block">
      <SortBlockTobacco 
        onClickSortItem={activeSortItem}
        items={sortItems} 
        activeSortItem={sortBy.type}
      />
      <FilterBlockTobacco 
        onClickFilterItem={activeFilterItem}
        items={filterItems}
        activeFilterItem={filterBy}
      />
    </div>
  )
}

export default SortAndFiltersBlockTobacco