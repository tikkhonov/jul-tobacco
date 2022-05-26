import React, { FC } from 'react'

import { IProduct } from '../../types/types'

import Card from '../Card'

interface ProductBlockProps {
  products: IProduct[];
  onClickAddProduct: any;
}

const CardsBlock: FC<ProductBlockProps> = ({ products, onClickAddProduct }) => {
  
  return (
    <div className="cards-block">
      { 
        products.map(product => 
          <Card
            onClickAddProduct={onClickAddProduct}
            key={product.id}
            product={product}
          />
        )
      }
    </div>
  )
}

export default CardsBlock