import React from 'react'

function CartFooter() {
  return (
    <div className="cart--footer">
      <div className="cart--footer-items">
        <div className="cart__footer_counter">Всего товаров: 5</div>
        <div className="cart__footer_price">Общая сумма: 1313 ₽</div>
      </div>
      <div className="cart--footer-buttons">
        <button className="cart__button_back">Вернуться назад</button>
        <button className="cart__button_payment">Оплатить сейчас</button>
      </div>
    </div>
  )
}

export default CartFooter