import React from 'react'

function Categories() {
  return (
    <div className="container">
      <div className="categories-block">
        <div className="categories--items">
          <div className="categories__item">
            <img src="./img/categories-item-1.png" alt="123"/>
            <div className="img__dlc">
              Аксессуары
            </div>
            <div className="descr">
              <div className="descr--content">
                <span className="descr__title">Аксессуары</span>
                <p className="descr__subtitle">
                  В нашем магазине огромный асортимент высококачественных аксессуаров для кальянов, которые вы можете купить
                </p>
              </div>
            </div>
          </div>
          <div className="categories__item">
            <img src="./img/categories-item-2.png" alt="123"/>
            <div className="img__dlc">
              Чай
            </div>
            <div className="descr">
              <div className="descr--content">
                <span className="descr__title">Чай</span>
                <p className="descr__subtitle">
                  В нашем магазине огромный асортимент высококачественных аксессуаров для кальянов, которые вы можете купить
                </p>
              </div>
            </div>
          </div>
          <div className="categories__item">
            <img src="./img/categories-item-3.png" alt="123"/>
            <div className="img__dlc">
              Табак
            </div>
            <div className="descr">
              <div className="descr--content">
                <span className="descr__title">Табак</span>
                <p className="descr__subtitle">
                  В нашем магазине огромный асортимент высококачественных аксессуаров для кальянов, которые вы можете купить
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories