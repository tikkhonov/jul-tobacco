import React from 'react'
import FilterBlock from './FilterBlock'
import SortBlock from './SortBlock'

function SortAndFiltersBlock () {
  return (
    <div className="sort-and-filters-block">
      <SortBlock items={['популярности', 'цене min', 'цене max', 'алфавиту']}/>
      <FilterBlock/>
    </div>
  )
}

export default SortAndFiltersBlock