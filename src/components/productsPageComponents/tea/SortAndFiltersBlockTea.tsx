import React, { FC } from 'react'


import { useFilterActions } from '../../../hooks/useActions';
import FilterBlockTea from './FilterBlockTea';
import SortBlockTea from './SortBlockTea';

interface SortAndFilters {
  sortBy: any;
  filterBy: any;
}

const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name: 'алфавиту', type: 'name', order: 'asc'}
]
const filterItems = ['Фруктовые ноты', 'Ореховые ноты']

const SortAndFiltersBlockTea: FC<SortAndFilters> = ({ sortBy, filterBy}) => {
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
      <SortBlockTea
        onClickSortItem={activeSortItem}
        items={sortItems} 
        activeSortItem={sortBy.type}
      />
      <FilterBlockTea
        onClickFilterItem={activeFilterItem}
        items={filterItems}
        activeFilterItem={filterBy}
      />
    </div>
  )
}

export default SortAndFiltersBlockTea