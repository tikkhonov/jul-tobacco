import React from 'react'

import CardsBlock4x from '../components/mainPageComponents/CardsBlock4x';
import Categories from '../components/mainPageComponents/Categories';
import MainInfo from '../components/mainPageComponents/MainInfo';
import Slider from '../components/mainPageComponents/Slider';
import EmptyLine from '../components/mainPageComponents/EmptyLine';

function MainPage () {
  return (
    <div className="MainPage">
      <Slider>
        <div className="slider--block">
          <div className="slider--header">
            <div className="container">
              <span>collections</span>/tobacco/banger/100g
            </div>
          </div>
          <div className="slider--main">
            <img src="/img/slider-image.png" alt="hookah" />
          </div>
          <div className="slider--footer">
            <div className="container">
              <div className="slider--content">
                <strong className="slider__strong">Banger 'Sweet Dreams' 100g</strong>
                <p className="slider__p">749.99 ₽</p>
                <span className="slider__span-1">★★★★★</span>
                <span className="slider__span-2">3957 Отзывов</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slider--block">
          <div className="slider--header">
            <div className="container">
              <span>collections</span>/tobacco/endorphin/60g
            </div>
          </div>
          <div className="slider--main">
            <img src="/img/slider-image-2.png" alt="hookah" />
          </div>
          <div className="container slider--circles">
            <button className="slider__circle slider__circle-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="48" 
                width="48"
              >
                <path d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"/>
              </svg>
            </button>
            <button className="slider__circle slider__circle-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="48" 
                width="48"
              >
                <path d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"/>
              </svg>
            </button>
          </div>
          <div className="slider--footer">
            <div className="container">
              <div className="slider--content">
                <strong className="slider__strong">Endorphin 'Blueberry' 60g</strong>
                <p className="slider__p">309.99 ₽</p>
                <span className="slider__span-1">★★★★★</span>
                <span className="slider__span-2">5601 Отзывов</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slider--block">
          <div className="slider--header">
            <div className="container">
              <span>collections</span>/tobacco/bonche/30g
            </div>
          </div>
          <div className="slider--main">
            <img src="/img/slider-image-3.png" alt="hookah" />
          </div>
          <div className="container slider--circles">
            <button className="slider__circle slider__circle-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="48" 
                width="48"
              >
                <path d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"/>
              </svg>
            </button>
            <button className="slider__circle slider__circle-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="48" 
                width="48"
              >
                <path d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"/>
              </svg>
            </button>
          </div>
          <div className="slider--footer">
            <div className="container">
              <div className="slider--content">
                <strong className="slider__strong">Bonche 'Lemongrass' 30g</strong>
                <p className="slider__p">689.99 ₽</p>
                <span className="slider__span-1">★★★★☆</span>
                <span className="slider__span-2">1024 Отзывов</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <EmptyLine/>
      <Categories/>
      <EmptyLine/>
      <CardsBlock4x/>
      <EmptyLine/>
      <MainInfo/>
    </div>
  )
}

export default MainPage