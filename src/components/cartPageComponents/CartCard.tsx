import React from 'react'

function CartCard() {
  
  return (
    <div className="cart__card">
      <div className="cart__item_circle">
        <img src="/img/image.png" alt="cart-item" width={218}/>
      </div>
      <div className="cart__item_name">Северный Крепкий орешек 40г</div>
      <div className="cart__item_price">260 ₽</div>
      <div className="cart__item_buttons">
        <button className="cart__button-plus">
          <svg 
            width="70" 
            height="70" 
            viewBox="0 0 70 70" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z" 
              fill="#6BFF37"
              className="bg-plus"
            />
            <path 
              d="M37.3497 16.1364L33.0767 16.1364V33.0767L16.1365 33.0767V37.3496L33.0767 37.3496V54.2899L37.3497 54.2899L37.3497 37.3496L54.2899 37.3496V33.0767L37.3497 33.0767L37.3497 16.1364Z" 
              fill="#EFEFEF"
            />
          </svg>
        </button>
        <button className="cart__button-clear">
          <svg 
            width="70" 
            height="70" 
            viewBox="0 0 70 70" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="35" 
              cy="35" 
              r="35" 
              fill="#FF2E2E"
              className="bg-clear"
            />
            <path 
              d="M54 19.8271L50.1729 16L35 31.1729L19.8271 16L16 19.8271L31.1729 35L16 50.1729L19.8271 54L35 38.8271L50.1729 54L54 50.1729L38.8271 35L54 19.8271Z" 
              fill="#202020"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CartCard