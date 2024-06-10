export default function loadFooter() {
  document.getElementById("footer").innerHTML = `
  <footer class="footer">
  <div class="container">
  <div class="footer-content flex-between">
  <a href="/">
  <img src="../../assets/svg/logo.svg" alt="" />
  </a>
  
  <ul class="footer-col display-column">
  <li class="txt-normal cursor-hover">Магазины</li>
  <li class="txt-normal cursor-hover">Кафе и рестораны</li>
  <li class="txt-normal cursor-hover">Услуги и сервисы</li>
  <li class="txt-normal cursor-hover">Развлечения</li>
  </ul>
  
  <ul class="footer-col display-column">
  <li class="txt-normal cursor-hover">О нас</li>
  <li class="txt-normal cursor-hover">События</li>
  <li class="txt-normal cursor-hover">Галерея</li>
  </ul>
  
  <ul class="footer-col display-column">
  <li class="txt-normal cursor-hover">Аренда</li>
  <li class="txt-normal cursor-hover">Контакты</li>
  <li class="txt-normal cursor-hover">Вакансии</li>
  </ul>
  
  <ul class="footer-col display-column">
  <li class="txt-normal cursor-hover">Тендеры</li>
  <li class="txt-normal cursor-hover">Политика конфиденциальности</li>
  <li class="txt-normal cursor-hover">Карта ТЦ</li>
  </ul>
  
  <ul class="footer-col display-column">
  <li>    
  <div class="input-cover align-center">
  <input class="header-input" placeholder="Найти магазин" type="text"/>
  <button class="search-button">
  <img src="../../assets/svg/search.svg" alt="search"/>
  </button>
  </div>
  </li>
  
  <li class="social-pages align-center">
  <a href="https://t.me/Alisher_Abdirimov" target="blank"><img src="../../assets/svg/telegramm.svg" alt="this is my telegram"/></a>
  <a href="https://vk.com/" target="blank"><img src="../../assets/svg/wk.svg" alt="social-media"/></a>
  </li>
  </ul>
  
  <ul class="location-info display-column">
  <li class="txt-small">300041, Тульская обл., г. Тула, ул. Путейская, д. 5</li>
  <li class="txt-small">ТЦ Сарафан: 10:00-21:00 Лента: 08:00-22:00</li>
  <li class="txt-small">+7 (4872) 33-80-55</li>
  </ul>
  </div>
  </div>
  </footer>
  `;
}
