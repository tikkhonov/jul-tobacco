import React from 'react'
import CartCard from './CartCard'

function CartContent() {
  return (
    <div className="cart--content">
      <div className="cart--items">
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
      </div>
    </div>
  )
}

export default CartContent