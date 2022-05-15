import React from 'react'
import FilterBlockTobacco from './FilterBlockTobacco'
import SortBlockTobacco from './SortBlockTobacco'

function SortAndFiltersBlockTobacco () {
  return (
    <div className="sort-and-filters-block">
      <SortBlockTobacco items={['популярности', 'цене min', 'цене max', 'алфавиту']}/>
      <FilterBlockTobacco 
        items={['25g', '30g', '60g', '100g']}
      />
    </div>
  )
}

export default SortAndFiltersBlockTobacco