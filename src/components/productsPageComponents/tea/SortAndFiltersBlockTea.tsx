import React from 'react'
import FilterBlockTea from './FilterBlockTea'
import SortBlockTea from './SortBlockTea'

function SortAndFiltersBlockTea () {
  return (
    <div className="sort-and-filters-block">
      <SortBlockTea 
        items={[
          {name: 'популярности', type: 'popular'}, 
          {name: 'цене min', type: 'priceMin'}, 
          {name: 'цене max', type: 'priceMax'}, 
          {name: 'алфавиту', type: 'alphabet'}
        ]}/>
      <FilterBlockTea items={['Пу Эр']} />
    </div>
  )
}

export default SortAndFiltersBlockTea