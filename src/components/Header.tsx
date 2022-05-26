import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useTypedSelector } from '../hooks/useTypedSelector'

function Header() {
  const { totalPrice, itemsCount } = useTypedSelector(item => ({
    items: item.cart.items,
    totalPrice: item.cart.totalPrice, 
    itemsCount: item.cart.itemsCount,
  }))

  return (
    <header>
      <div className="header-left">
        <div className="header--items" >
            <NavLink to="/" className="header__item">Главная</NavLink>
            <NavLink to="/products" className="header__item">Продукция</NavLink>
            <NavLink to="/about" className="header__item">О нас</NavLink>
        </div>
      </div>
      <div className="header-logo">
        <Link to="/">
          <img 
            src="https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280" 
            alt="logo"  
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="header-right">
        <div className="header--items"> 
          <Link to="/about" className="header__item">FAQ</Link>
          <div className="header__item">
            <Link to="/">
              <div className="header__profile">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="4rem" 
                  viewBox="0 0 24 24" 
                  width="4rem" 
                  fill="#EFEFEF"
                >
                  <path 
                    d="M0 0h24v24H0V0z" 
                    fill="none"
                  />
                  <path 
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <Link to="/cart">
            <button className="header__button">
              <div className="cart__items_count">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 28 28" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M20.3624 15.4C21.4121 15.4 22.3357 14.826 22.8115 13.958L27.8217 4.872C28.3395 3.948 27.6677 2.8 26.6041 2.8H5.89181L4.5763 0H0V2.8H2.79896L7.83709 13.426L5.94779 16.842C4.92617 18.718 6.26967 21 8.39688 21H25.1906V18.2H8.39688L9.93631 15.4H20.3624ZM7.22132 5.6H24.225L20.3624 12.6H10.5381L7.22132 5.6ZM8.39688 22.4C6.85745 22.4 5.61192 23.66 5.61192 25.2C5.61192 26.74 6.85745 28 8.39688 28C9.93631 28 11.1958 26.74 11.1958 25.2C11.1958 23.66 9.93631 22.4 8.39688 22.4ZM22.3917 22.4C20.8523 22.4 19.6067 23.66 19.6067 25.2C19.6067 26.74 20.8523 28 22.3917 28C23.9311 28 25.1906 26.74 25.1906 25.2C25.1906 23.66 23.9311 22.4 22.3917 22.4Z" 
                    fill="#efefef"
                  />
                </svg>
                <span>{itemsCount}</span>
              </div>
              <span>{totalPrice} ₽</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header