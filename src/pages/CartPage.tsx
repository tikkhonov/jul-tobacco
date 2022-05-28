import React from 'react'

import CartContent from '../components/cartPageComponents/CartContent'
import CartEmptyLine from '../components/cartPageComponents/CartEmptyLine'
import CartFooter from '../components/cartPageComponents/CartFooter'
import CartHeader from '../components/cartPageComponents/CartHeader'
import VoidCart from '../components/cartPageComponents/VoidCart'

import { useCartActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

function CartPage () {
  const { totalPrice, itemsCount, items } = useTypedSelector(({ cart }) => cart)
  const { cartClear, PlusCartItem, MinusCartItem } = useCartActions()

  const cartHandlerClear = (obj: any) => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      cartClear(obj)
      alert("Корзина очищена")
    }
  }
  
  const onPlusCartItem = (id: any) => {
    PlusCartItem(id)
  }

  const onMinusCartItem = (id: any) => {
    MinusCartItem(id)
  }
  
  return (
    <div className="wrapper">
      <CartEmptyLine/>
      <div className="cart">
        {
          itemsCount 
          ? <div>
            <CartHeader cartClear={cartHandlerClear}/>
            <CartContent items={items} onPlus={onPlusCartItem} onMinus={onMinusCartItem}/>
            <CartFooter totalPrice={totalPrice} itemsCount={itemsCount}/>
          </div>
          : <VoidCart/>
        }
      </div>
    </div>
  )
}

export default CartPage