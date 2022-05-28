import React, { FC } from 'react'

import { Link } from 'react-router-dom'

interface CartFooterProps {
  totalPrice: number;
  itemsCount: number;
}

const CartFooter: FC<CartFooterProps> = ({ totalPrice, itemsCount }) => {

  return (
    <div className="cart--footer">
      <div className="cart--footer-items">
        <div className="cart__footer_counter">Всего товаров: {itemsCount}</div>
        <div className="cart__footer_price">Общая сумма: {totalPrice} ₽</div>
      </div>
      <div className="cart--footer-buttons">
        <Link to="/">
          <button className="cart__button_back">Вернуться назад</button>
        </Link>
        <button 
          onClick={() => alert("CORE lorem*20")}
          className="cart__button_payment"
        >
          Оплатить сейчас
        </button>
      </div>
    </div>
  )
}

export default CartFooter