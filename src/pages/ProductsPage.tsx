import React from 'react'

import Card from '../components/Card'
import SearchBlock from '../components/productsPageComponents/SearchBlock'
import SortAndFiltersBlock from '../components/productsPageComponents/SortAndFiltersBlock'
import Mark from '../components/Mark'

function ProductsPage() {
  return (
    <div className="wrapper">
      <Mark/>
      <div className="container">
        <SearchBlock/>
        <div className="main">
          <SortAndFiltersBlock/>
          <div className="cards-block">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage