import React from 'react'
import { Link } from 'react-router-dom'

function VoidCart () {

  return (
    <div className="container">
      <div className="cart-void-content">
        <div className="cart--void-items">
          <div className="cart__void-item">
            <div className="cart__void-smile">
              <svg 
                width="200" 
                height="200" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M130 93C138.284 93 145 86.2843 145 78C145 69.7157 138.284 63 130 63C121.716 63 115 69.7157 115 78C115 86.2843 121.716 93 130 93Z" fill="#191919"/>
                <path d="M70 93C78.2843 93 85 86.2843 85 78C85 69.7157 78.2843 63 70 63C61.7157 63 55 69.7157 55 78C55 86.2843 61.7157 93 70 93Z" fill="#191919"/>
                <path d="M100 120C76.7 120 56.8 134.5 48.8 155H65.5C72.4 143.1 85.2 135 100 135C114.8 135 127.5 143.1 134.5 155H151.2C143.2 134.5 123.3 120 100 120ZM99.9 0C44.7 0 0 44.8 0 100C0 155.2 44.7 200 99.9 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 99.9 0ZM100 180C55.8 180 20 144.2 20 100C20 55.8 55.8 20 100 20C144.2 20 180 55.8 180 100C180 144.2 144.2 180 100 180Z" fill="#191919"/>
              </svg>
            </div>
          </div>
          <div className="cart__void-item">
            <div className="cart__void-title">
              <p>Корзина пустая</p>
            </div>
          </div>
          <div className="cart__void-item">  
            <div className="cart__void-subtitle">
              <div className="subtitle_1">
                Вы пока ничего не заказывали. 
              </div>
              <div className="subtitle_2">
                Чтоб заказать нашу продукцию перейдите на главную страницу
              </div>
            </div>
          </div>
          <div className="cart__void-item">
            <Link to="/">
              <button className="cart__button-back">Вернуться назад</button> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoidCart