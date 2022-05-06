import React from 'react'
import FilterBlock from './FilterBlock'
import SortBlock from './SortBlock'

function SortAndFiltersBlock() {
  return (
    <div className="sort-and-filters-block">
      <SortBlock/>
      <FilterBlock/>
    </div>
  )
}

export default SortAndFiltersBlock