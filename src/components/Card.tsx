import React from 'react'

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="/img/image.png" alt="tobacco"/>
        <div className="card--buttons_block">
          <div className="favorite__button">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                width="40" 
                height="40" 
                rx="8" 
                fill="#6BFF37"
              />
              <path 
                d="M25.85 9C23.588 9 21.417 10.0594 20 11.7335C18.583 10.0594 16.412 9 14.15 9C10.146 9 7 12.1651 7 16.1935C7 21.1373 11.42 25.1657 18.115 31.2866L20 33L21.885 31.2736C28.58 25.1657 33 21.1373 33 16.1935C33 12.1651 29.854 9 25.85 9ZM20.13 29.3379L20 29.4687L19.87 29.3379C13.682 23.7008 9.6 19.9733 9.6 16.1935C9.6 13.5777 11.55 11.6158 14.15 11.6158C16.152 11.6158 18.102 12.9106 18.791 14.7025H21.222C21.898 12.9106 23.848 11.6158 25.85 11.6158C28.45 11.6158 30.4 13.5777 30.4 16.1935C30.4 19.9733 26.318 23.7008 20.13 29.3379Z" 
                fill="#101010"
              />
            </svg>
          </div>
          <div className="more__button">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                width="40" 
                height="40" 
                rx="8" 
                fill="#6BFF37"
              />
              <path 
                d="M20 13.5333C24.8236 13.5333 29.1255 16.2313 31.2255 20.5C29.1255 24.7687 24.8236 27.4667 20 27.4667C15.1764 27.4667 10.8745 24.7687 8.77455 20.5C10.8745 16.2313 15.1764 13.5333 20 13.5333ZM20 11C13.6364 11 8.20182 14.9393 6 20.5C8.20182 26.0607 13.6364 30 20 30C26.3636 30 31.7982 26.0607 34 20.5C31.7982 14.9393 26.3636 11 20 11ZM20 17.3333C21.7564 17.3333 23.1818 18.752 23.1818 20.5C23.1818 22.248 21.7564 23.6667 20 23.6667C18.2436 23.6667 16.8182 22.248 16.8182 20.5C16.8182 18.752 18.2436 17.3333 20 17.3333ZM20 14.8C16.8436 14.8 14.2727 17.3587 14.2727 20.5C14.2727 23.6413 16.8436 26.2 20 26.2C23.1564 26.2 25.7273 23.6413 25.7273 20.5C25.7273 17.3587 23.1564 14.8 20 14.8Z" 
                fill="#101010"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-main">
        <div className="card--content">
          <div className="card--review">
            <div className="review__stars">★★★★★</div>
            <div className="review__count">1313 Отзывов</div>
          </div>
          <div className="card__title">
            <p>Северный Крепкий орешек 40g</p>
          </div>
          <div className="card__button">
            <div className="card__button_items">
              <span>В корзину</span>
              <div className="button__item_counter"><span>3</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card