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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam eligendi molestias fugiat aut quia quos officia quaerat saepe culpa?
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat placeat totam repellendus, sed fuga accusantium doloremque corporis ratione vel quis.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia necessitatibus debitis odit recusandae cum aperiam ad maxime sed asperiores.
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