import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer--items">
            <div className="footer__item">
              <div className="footer__item_title">Прочее</div>
              <br />
              <ul className="footer__item_subtitle">
                <li>Часто задаваемые вопросы</li>
                <li>Скидки постоянным клиентам</li>
                <li>Кальянные смеси</li> 
                <li>Статьи и новости</li>
                <li>Техническая поддержка</li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__item_title">Сотрудничество</div>
              <br />
              <ul className="footer__item_subtitle">
                <li>Франшиза</li>
                <li>Доставка и оплата</li>
                <li>Гарантии и возврат</li>
                <li>Договор-поставка</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__item_title">Магазины</div>
              <br />
              <ul className="footer__item_subtitle footer_item_shops">
                <li>Лиговский пр., 98, Санкт-Петербург, 191119</li>
                <li>Невский пр., 54, Санкт-Петербург, 191011</li>
                <li>Московский пр-т., 63, Санкт-Петербург, 190005</li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__item_title">Контакты</div>
              <br />
              <ul className="footer__item_subtitle">
                <li>Телефон: +7 (999) 666-13-13</li>
                <li>Почта: hookahJul@kalian.com</li>
                <li>Телеграм: t.me/hookahJul1313</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--bottom">
        <div className="container footer-container">
          <div className="footer__subtitle">
            Информация, содержащаяся на настоящем сайте, не является рекламой, так как представляет собой каталог для ограниченного круга лиц - совершеннолетних потребителей табачной продукции для предоставления им достоверной информации об основных потребительских свойствах и качественных характеристик товаров, ассортименте товаров, правилах их использования (п.п.1, 2 ст.10 Закона «О защите прав Потребителя»).
          </div>
          <div className="footer__product_name">Copyright 2022 © JulTobacco</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer