import React, { FC } from 'react'

interface CartHeaderProps {
  cartClear: any;
}

const CartHeader: FC<CartHeaderProps> = ({ cartClear }) => {

  return (
    <div className="cart--header">
      <div className="cart__header_title">
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 28 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M20.3624 15.4C21.4121 15.4 22.3357 14.826 22.8115 13.958L27.8217 4.872C28.3395 3.948 27.6677 2.8 26.6041 2.8H5.89181L4.5763 0H0V2.8H2.79896L7.83709 13.426L5.94779 16.842C4.92617 18.718 6.26967 21 8.39688 21H25.1906V18.2H8.39688L9.93631 15.4H20.3624ZM7.22132 5.6H24.225L20.3624 12.6H10.5381L7.22132 5.6ZM8.39688 22.4C6.85745 22.4 5.61192 23.66 5.61192 25.2C5.61192 26.74 6.85745 28 8.39688 28C9.93631 28 11.1958 26.74 11.1958 25.2C11.1958 23.66 9.93631 22.4 8.39688 22.4ZM22.3917 22.4C20.8523 22.4 19.6067 23.66 19.6067 25.2C19.6067 26.74 20.8523 28 22.3917 28C23.9311 28 25.1906 26.74 25.1906 25.2C25.1906 23.66 23.9311 22.4 22.3917 22.4Z" 
          fill="#EFEFEF"
        />
      </svg>
        <span>&nbsp; Корзина</span>
      </div>
      <div className="cart__header_clear">
        <span onClick={cartClear}> очистить корзину  ✕ </span>
      </div>
    </div>
  )
}

export default CartHeader