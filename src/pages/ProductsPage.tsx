import React from 'react'
import axios from 'axios'

import SearchBlock from '../components/productsPageComponents/SearchBlock'
import SortAndFiltersBlock from '../components/productsPageComponents/SortAndFiltersBlock'
import Mark from '../components/Mark'
import CardsBlock from '../components/productsPageComponents/CardsBlock'
import { IProduct } from '../types/types'

function ProductsPage() {
  const [products, setProducts] = React.useState<IProduct[]>([])

  React.useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      const response = await axios.get<IProduct[]>("http://localhost:3000/db.json")
      setProducts(response.data)
    } catch (e) {
      alert(e)
    }
  }
  
  return (
    <div className="wrapper">
      <Mark/>
      <div className="container">
        <SearchBlock/>
        <div className="main">
          <SortAndFiltersBlock/>
          <CardsBlock products={products}/>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage