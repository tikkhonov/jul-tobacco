import React from 'react'
import FilterBlockTea from './FilterBlockTea'
import SortBlockTea from './SortBlockTea'

function SortAndFiltersBlockTea () {
  return (
    <div className="sort-and-filters-block">
      <SortBlockTea items={['популярности', 'цене min', 'цене max', 'алфавиту']}/>
      <FilterBlockTea 
        items={['Пу Эр']}
      />
    </div>
  )
}

export default SortAndFiltersBlockTea