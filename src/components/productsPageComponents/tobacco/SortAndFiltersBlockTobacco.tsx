import React from 'react'

import FilterBlockTobacco from './FilterBlockTobacco'
import SortBlockTobacco from './SortBlockTobacco'

import { setFilterBy, setSortBy } from '../../../redux/actionCreators/filters'

const SortItems = [
  {name: 'популярности', type: 'popular'}, 
  {name: 'цене min', type: 'priceMin'}, 
  {name: 'цене max', type: 'priceMax'}, 
  {name: 'алфавиту', type: 'alphabet'}
]
const FilterItems = ['25g', '30g', '60g', '100g']

function SortAndFiltersBlockTobacco () {

  const onClickSortItem = React.useCallback((index: number) => {
    setSortBy(index)
    console.log(index);
    
  }, [])

  const onClickFilterItem = React.useCallback((filtIndex: number) => {
    setFilterBy(filtIndex)
    console.log(filtIndex);
    
  }, [])
  
  return (
    <div className="sort-and-filters-block">
      <SortBlockTobacco 
        onClickItem={onClickSortItem}
        items={SortItems} 
      />
      <FilterBlockTobacco 
        onClickItem={onClickFilterItem}
        items={FilterItems} 
      />
    </div>
  )
}

export default SortAndFiltersBlockTobacco