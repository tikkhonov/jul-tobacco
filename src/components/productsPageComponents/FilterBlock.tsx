import React from 'react'

function FilterBlock() {
  return (
    <div className="filter-block">
      <div className="filter--items">
        <div className="filter__item">
          <div className="filter__item-title">Табак для кальяна</div>
          <button className="plus"> + </button>
        </div>
        <div className="filter__item">
          <div className="filter__item-title">Чай</div>
          <button className="plus"> + </button>
        </div>
        <div className="filter__item filter__item-active">
          <div className="filter__item-title">Аксессуары</div>
          <button className="minus"> - </button>
          <div className="filter_more_items">
            <div className="filter__more_item">
              Мундштуки
            </div>
            <div className="filter__more_item">
              Щепцы
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBlock