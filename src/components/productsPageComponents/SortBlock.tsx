import React from 'react'

function SortBlock() {
  return (
    <div className="sort-block">
      <div className="sort-block_title">Сортировать по:</div>
      <div className="sort--items">
        <div className="sort__item sort__item-active">
          популярности
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#6BFF37"/>
            <path d="M7 17.5L12.5 23L25.5 10" stroke="#EFEFEF" strokeWidth="5"/>
          </svg>
        </div>
        <div className="sort__item">
          цене min
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#6BFF37"/>
            <path d="M7 17.5L12.5 23L25.5 10" stroke="#EFEFEF" strokeWidth="5"/>
          </svg>
        </div>
        <div className="sort__item">
          цене max
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#6BFF37"/>
            <path d="M7 17.5L12.5 23L25.5 10" stroke="#EFEFEF" strokeWidth="5"/>
          </svg>
        </div>
        <div className="sort__item">
          алфавиту
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#6BFF37"/>
            <path d="M7 17.5L12.5 23L25.5 10" stroke="#EFEFEF" strokeWidth="5"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SortBlock