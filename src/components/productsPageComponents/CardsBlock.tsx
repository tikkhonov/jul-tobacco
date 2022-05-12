import React, { FC } from 'react'
import { IProduct } from '../../types/types'
import Card from '../Card'

interface ProductBlockProps {
  products: IProduct[];
}
const CardsBlock: FC<ProductBlockProps> = ({products}) => {
  return (
    <div className="cards-block">
      {
        products.map(product => 
          <Card
            key={product.id}
            product={product}
          />
        )
      }
    </div>
  )
}

export default CardsBlock