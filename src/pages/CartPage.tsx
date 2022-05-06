import React from 'react'

import CartContent from '../components/cartPageComponents/CartContent'
import CartEmptyLine from '../components/cartPageComponents/CartEmptyLine'
import CartFooter from '../components/cartPageComponents/CartFooter'
import CartHeader from '../components/cartPageComponents/CartHeader'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WarningBlock from '../components/WarningBlock'

function CartPage() {
  return (
    <div className="wrapper">
      <Header/>
      <CartEmptyLine/>
      <div className="cart">
        <CartHeader/>
        <CartContent/>
        <CartFooter/>
      </div>
      <WarningBlock/>
      <Footer/>
    </div>
  )
}

export default CartPage