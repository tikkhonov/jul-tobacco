import React from 'react'
import axios from 'axios'

import Mark from '../components/Mark'
import CardsBlock from '../components/productsPageComponents/CardsBlock'
import { IProduct } from '../types/types'
import SortAndFiltersBlockAccessories from '../components/productsPageComponents/accessories/SortAndFiltersBlockAccessories'

function ProductsPageAccessories() {
  const [products, setProducts] = React.useState<IProduct[]>([])
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    fetchProducts()
  }, [])
  
  const filterProducts = products.filter(prod => {
    return prod.name.toLowerCase().includes(value.toLowerCase())
  })

  async function fetchProducts() {
    try {
      const response = await axios.get<IProduct[]>("https://627d2f9abf2deb7174e92ac3.mockapi.io/accessories")
      setProducts(response.data)
    } catch (e) {
      alert(e)
    }
  }
  
  return (
    <div className="wrapper">
      <Mark/>
      <div className="container">
        <form className="search-block">
          <div className="search--items">
            <div className="search__loupe">
              <svg 
                width="26" 
                height="26" 
                viewBox="0 0 42 42" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M30.0172 26.4151H28.1201L27.4477 25.7667C29.801 23.0292 31.2178 19.4751 31.2178 15.6089C31.2178 6.98799 24.2298 0 15.6089 0C6.98799 0 0 6.98799 0 15.6089C0 24.2298 6.98799 31.2178 15.6089 31.2178C19.4751 31.2178 23.0292 29.801 25.7667 27.4477L26.4151 28.1201V30.0172L38.422 42L42 38.422L30.0172 26.4151V26.4151ZM15.6089 26.4151C9.6295 26.4151 4.80274 21.5883 4.80274 15.6089C4.80274 9.6295 9.6295 4.80274 15.6089 4.80274C21.5883 4.80274 26.4151 9.6295 26.4151 15.6089C26.4151 21.5883 21.5883 26.4151 15.6089 26.4151Z" 
                  fill="#303030"
                />
              </svg>
            </div>
            <input 
              placeholder="Поиск . . ." 
              type="text" 
              className="search__input"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        </form>
        <div className="main">
          <SortAndFiltersBlockAccessories/>
          <CardsBlock products={filterProducts}/>
        </div>
      </div>
    </div>
  )
}

export default ProductsPageAccessories