import React from 'react'
import FilterBlockAccessories from './FilterBlockAccessories'
import SortBlockAccessories from './SortBlockAccessories'

function SortAndFiltersBlockAccessories () {
  return (
    <div className="sort-and-filters-block">
      <SortBlockAccessories items={['популярности', 'цене min', 'цене max', 'алфавиту']}/>
      <FilterBlockAccessories 
        items={['Мундштуки', 'Щепцы']}
      />
    </div>
  )
}

export default SortAndFiltersBlockAccessories