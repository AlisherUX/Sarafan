export default function loadHeader() {
  document.getElementById("header").innerHTML = `
    <header class="header">
    <div class="container">
    <div>
      
    </div>
    <div class="header-content align-center">
    <a href="/">
    <img src="../../assets/svg/logo.svg" alt="logo" class="header-logo"/>
    </a>
    
    <div class="header-actions align-center">
    <div class="work-order">
    <p class="header-txt">Режим работы:</p>
    <p class="header-txt work-time">пн-вс 10:00-21:00  Лента 08:00-22:00</p>
    </div>
    
    <a href="/" class="header-link cursor-hover">Контакты</a>
    <a href="/" class="header-link cursor-hover">Карта ТЦ</a>
    
    <div class="input-cover align-center">
    <input class="header-input" placeholder="Найти магазин" type="text"/>
    
    <button class="search-button">
    <img src="../../assets/svg/search.svg" alt="search"/>
    </button>
    </div>
    
    <button class="burger-button">
    <div class="icon">
    <div class="icon-element"></div>
    <div class="icon-element"></div>
    <div class="icon-element"></div>
    </div>
    </button>
    </div>
    </div>
    </div>
    
    <div class="burgermenu">
    <ul class="burgermenu-col">
    <li class="txt-lg cursor-hover">О нас</li>
    <li class="txt-lg cursor-hover">События</li>
    <li class="txt-lg cursor-hover">Галерея</li>
    <li class="txt-lg cursor-hover">Аренда</li>  
    <li class="txt-lg cursor-hover">Карта ТЦ</li>
    <li class="txt-lg cursor-hover">Контакты</li>
    <li class="txt-lg cursor-hover">Вакансии</li>
    <li class="txt-lg cursor-hover">Тендеры</li>
    </ul>

    <span class="line"></span>

    <ul class="burgermenu-col">
    <li class="burgermenu-title">Магазины</li>
    <li class="txt-normal cursor-hover">Все магазины</li>
    <li class="txt-normal cursor-hover">Женская одежда</li>
    <li class="txt-normal cursor-hover">Мужская одежда</li>
    <li class="txt-normal cursor-hover">Детская одежда</li>  
    <li class="txt-normal cursor-hover">Детские товары</li>
    <li class="txt-normal cursor-hover">Обувь</li>
    <li class="txt-normal cursor-hover">Кожгалантерея</li>
    <li class="txt-normal cursor-hover">Продукты</li>
    </ul>
    
    <ul class="burgermenu-col">
    <li class="txt-normal cursor-hover">Цифровая и бытовая техника</li>
    <li class="txt-normal cursor-hover">Парфюмерия, косметика</li>
    <li class="txt-normal cursor-hover">Ювелирные украшения</li>
    <li class="txt-normal cursor-hover">Сувениры, подарки</li>
    <li class="txt-normal cursor-hover">Полезное</li>  
    <li class="txt-normal cursor-hover">Товары для дома</li>
    <li class="txt-normal cursor-hover">Спортивные товары, одежда</li>
    <li class="txt-normal cursor-hover">Товары для животных</li>
    </ul>
    
    <ul class="burgermenu-col">
    <li class="burgermenu-title">Кафе и рестораны</li>
    <li class="txt-normal cursor-hover">Кафе и рестораны</li>
    <li class="txt-normal cursor-hover">Рестораны быстрого обслуживания</li>
    <li class="txt-normal cursor-hover">Кофейни</li>
    <li class="txt-normal cursor-hover">Мороженое и десерты</li>  
    </ul>
    
    <ul class="burgermenu-col">
    <li class="burgermenu-title">Услуги и сервисы</li>
    <li class="txt-normal cursor-hover">Банкоматы</li>
    <li class="txt-normal cursor-hover">Салоны связи</li>
    <li class="txt-normal cursor-hover">Парикмахерскиеа</li>  
    <li class="txt-normal cursor-hover">Администрация</li>
    <li class="txt-normal cursor-hover">Продукты</li>
    <li class="txt-normal cursor-hover">Другое</li>
    </ul>
    
    <ul class="burgermenu-col">
    <li class="burgermenu-title">Развлечения</li>
    <li class="txt-normal cursor-hover">Джунгли парк</li>
    <li class="txt-normal cursor-hover">Мероприятия</li>
    <li class="txt-normal cursor-hover">Акции</li>  
    <li class="txt-normal cursor-hover">Новости</li>
    </ul>
    </div>
    </header>
    `;

    let menu = document.querySelector(".burgermenu");
    let elements = document.querySelectorAll(".icon-element");
    let button = document.querySelector(".burger-button");
    let toggle = false;
    
    button.addEventListener("click", () => {
      toggle = !toggle;
    
      if (toggle) {
        menu.classList.add("active");
        elements.forEach((el) => {
          el.classList.add("active");
        });
      } else {
        menu.classList.remove("active");
        elements.forEach((el) => {
          el.classList.remove("active");
        });
      }
    });
    
}
