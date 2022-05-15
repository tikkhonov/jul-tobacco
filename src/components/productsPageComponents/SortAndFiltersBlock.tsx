import React from 'react'
import FilterBlock from './FilterBlock'
import SortBlock from './SortBlock'

function SortAndFiltersBlock () {
  return (
    <div className="sort-and-filters-block">
      <SortBlock items={['популярности', 'цене min', 'цене max', 'алфавиту']}/>
      <FilterBlock 
        items={['25g', '30g', '60g', '100g']}
      />
    </div>
  )
}

export default SortAndFiltersBlock