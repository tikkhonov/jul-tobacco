import React, { FC } from 'react'

import FilterBlockAccessories from './FilterBlockAccessories'
import SortBlockAccessories from './SortBlockAccessories'

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
const filterItems = ['Щепцы', 'Мундштуки']

const SortAndFiltersBlockAccessories: FC<SortAndFilters> = ({ sortBy, filterBy}) => {
  const { setSortBy } = useFilterActions()
  const { setFilterBy } = useFilterActions() 
  
  const activeSortItem = React.useCallback((item: any) => {
    setSortBy(item)
  }, [])

  const activeFilterItem = React.useCallback((filtIndex: string) => {
    setFilterBy(filtIndex)
  }, [])
  
  return (
    <div className="sort-and-filters-block">
      <SortBlockAccessories 
        onClickSortItem={activeSortItem}
        items={sortItems} 
        activeSortItem={sortBy.type}
      />
      <FilterBlockAccessories 
        onClickFilterItem={activeFilterItem}
        items={filterItems}
        activeFilterItem={filterBy}
      />
    </div>
  )
}

export default SortAndFiltersBlockAccessories