import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Card from '../components/Card'
import SearchBlock from '../components/productsPageComponents/SearchBlock'
import SortAndFiltersBlock from '../components/productsPageComponents/SortAndFiltersBlock'
import WarningBlock from '../components/WarningBlock'
import Mark from '../components/Mark'

function ProductsPage() {
  return (
    <div className="wrapper">
      <Header/>
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
      <WarningBlock/>
      <Footer/>
    </div>
  )
}

export default ProductsPage