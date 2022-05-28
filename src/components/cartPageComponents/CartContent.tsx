import React, { FC } from 'react'

import CartCard from './CartCard'

interface CartContentProps {
  items: any;
  onMinus: any;
  onPlus: any;
}

const CartContent: FC<CartContentProps> = ({ items, onMinus, onPlus }) => {
  const addedProducts: any[] = Object.keys(items).map((key: any) => {
    return items[key].items[0]
  })
  
  return (
    <div className="cart--content">
      <div className="cart--items">
        {
          addedProducts.map((obj: any) => {
            return <CartCard
              id={obj.id}
              key={`${obj.name}_${obj.id}`}
              name={obj.name}
              totalPrice={items[obj.id].totalPrice}
              itemsCount={items[obj.id].items.length}
              imageURL={obj.imageURL}
              size={obj.size}
              onPlus={onPlus}
              onMinus={onMinus}
            />
          })
        }
      </div>
    </div>
  )
}

export default CartContent