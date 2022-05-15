import React from 'react'

import CartContent from '../components/cartPageComponents/CartContent'
import CartEmptyLine from '../components/cartPageComponents/CartEmptyLine'
import CartFooter from '../components/cartPageComponents/CartFooter'
import CartHeader from '../components/cartPageComponents/CartHeader'

function CartPage() {
  return (
    <div className="wrapper">
      <CartEmptyLine/>
      <div className="cart">
        <CartHeader/>
        <CartContent/>
        <CartFooter/>
      </div>
    </div>
  )
}

export default CartPage