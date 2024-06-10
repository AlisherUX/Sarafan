export default function loadHome() {
  document.getElementById("content").innerHTML = `
  <div class="container">
  <main class="main">
  <div class="breadcrumb">
  <button>Главная</button>><button class="active-breadcrumb">Аренда</button>
  </div>
  <section class="banner flex-between">
  <img src="../../assets/png/hero-img.png" alt="banner-img" class="banner-img" />
  
  <div class="banner-info display-column">
  <h1 class="title">Аренда в ТУЦ “Сарафан”</h1>
  <p class="txt-small">
  Торговый центр «Сарафан», расположенный по адресу: г. 
  Тула, ул. Путейская, д.5 (Площадь Московского вокзала), 
  предлагает помещения в аренду от собственника от 25 до 1000 кв. м.
  </p>
  
  <button class="banner-button align-center">
  Скачать презентацию
  <img src="../../assets/svg/download.svg" alt=""/>
  </button>
  
  <p class="txt-xl">Преимущества аренды в нашем торговом центре:</p>
  
  <div class="advantages display-column">
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">ТЦ «Сарафан» находится в 5 минутах езды от центра города на площади Московского вокзала на одной из самых оживленных улиц города – Красноармейский проспект.</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Рядом жилой массив, пересечение основных транспортных и пешеходных потоков –конечная остановка общественного транспорта, железнодорожный вокзал.</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">На территории ТЦ «Сарафан» есть бесплатная парковка для клиентов, более 500 машиномест, удобный подъезд.</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Ежедневно наш ТЦ посещает порядка 10 000 тысяч человек различной целевой аудитории</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Демократичные цены за аренду площади</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">У нас Вы можете арендовать площадь под магазины белья, одежды и обуви, салоны, точки общепита и др. </p>
  </div>
  
  <p class="txt-small">Открытие торговой точки в одном из оживленных мест города обеспечит доходность, развитие и процветание Вашего бизнеса.</p>
  </div>
  </section>
  
  <section class="swiper-section display-column">
  <p class="title">Более 130 бутиков и магазинов уже арендуют у нас помещения</p>
  
  <div class="swiper-content">
  <div class="swiper-container">
  <div class="swiper-wrapper">
  <div class="swiper-slide flex-between">
  <img src="../../assets/png/first-shop.png" alt="Image 1">
  <img src="../../assets/png/second-shop.png" alt="Image 5">
  <img src="../../assets/png/third-shop.png" alt="Image 8">
  </div>
  <div class="swiper-slide flex-between">
  <img src="../../assets/png/first-shop.png" alt="Image 1">
  <img src="../../assets/png/second-shop.png" alt="Image 5">
  <img src="../../assets/png/third-shop.png" alt="Image 8">
  </div>
  <div class="swiper-slide flex-between">
  <img src="../../assets/png/first-shop.png" alt="Image 1">
  <img src="../../assets/png/second-shop.png" alt="Image 5">
  <img src="../../assets/png/third-shop.png" alt="Image 8">
  </div>
  </div>
  
  <div class="swiper-buttons">
  <button class="swiper-button-prev">
  <img src="../../assets/svg/arrow-prev.svg" alt="arrow"/>
  </button>
  <div class="swiper-pagination"></div>
  <button class="swiper-button-next">
  <img src="../../assets/svg/arrow-next.svg" alt="arrow"/>
  </button>
  </div>
  </div>
  
  <div class="advantages display-column">
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Якорные арендаторы - Лента, Детский Мир, Технопарк, Модис, Familia, Читай город, Тутанхамон, Л'Этуаль</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Бренды - EWA, Artigli, Gerzedo, Goergo, Du monde, Petek, Neri Karra, Ledy Collection, Paolo Conte, P'Cont, VINZER, Ace, Tonnelli, Milavitsa, и др.</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Магазины спортивной одежды и инвентаря: Адреналин, Спорт Лайн</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Зона фудкорта - Burger King, Империя вкуса, Про Кофий, Добрая сдоба</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Салоны связи: Билайн, Мегафон, YOTA, Связной, Теле2</p>
  </div>
  
  <div class="unique-advantage">
  <div class="red-ball"></div>
  <p class="txt-small">Зоосад, аптека «Здесь аптека», «Арт-оптика», Fresh Оптика, ковры, салоны штор, текстиль Missis Hatson и Home TEX, салон Арт-Самовар, посуда, подарки, картины, сувениры и другие.</p>
  </div>
  
  </div>
  </div>
  </section>

  <section class="gallery-section display-column">
  <div class="flex-between">
  
  <div class="display-column gallery-info">
  <span class="display-column info-section">
  <p class="gallery-txt">Общая площадь торгового центра</p>
  <p class="gallery-num">25 816 м2</p>
  </span>
  <span class="display-column info-section">
  <p class="gallery-txt">Общая площадь торгового центра</p>
  <p class="gallery-num">25 816 м2</p>
  </span>
  <span class="display-column info-section">
  <p class="gallery-txt">Общая площадь торгового центра</p>
  <p class="gallery-num">25 816 м2</p>
  </span>
  <span class="display-column info-section">
  <p class="gallery-txt">Общая площадь торгового центра</p>
  <p class="gallery-num">25 816 м2</p>
  </span>
  </div>


  <img src="../../assets/png/img-cube.png" alt="" height="438"/>
  <img src="../../assets/png/img-rectangle.png" alt="" height="438"/>
  </div>

  <div class="flex-between">
  <img src="../../assets/png/img-a.png" alt="" height="305"/>
  <img src="../../assets/png/img-b.png" alt="" height="305"/>
  <img src="../../assets/png/img-c.png" alt="" height="305"/>
  </div>
  </section>
  </main>
  </div>`;

  const swiperWrapper = document.querySelector(".swiper-wrapper");
  const prevButton = document.querySelector(".swiper-button-prev");
  const nextButton = document.querySelector(".swiper-button-next");
  const pagination = document.querySelector(".swiper-pagination");
  const slides = document.querySelectorAll(".swiper-slide");
  let currentIndex = 0;

  function createPagination() {
    slides.forEach((slide, index) => {
      const bullet = document.createElement("span");
      bullet.classList.add("swiper-pagination-bullet");
      if (index === 0) bullet.classList.add("active");
      pagination.appendChild(bullet);
    });
  }

  function updatePagination() {
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("active", index === currentIndex);
    });
  }

  function updateSwiper() {
    const offset = -currentIndex * 100;
    swiperWrapper.style.transform = `translateX(${offset}%)`;
    updatePagination();
  }

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSwiper();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSwiper();
    }
  });

  pagination.addEventListener("click", function (event) {
    if (event.target.classList.contains("swiper-pagination-bullet")) {
      currentIndex = Array.from(pagination.children).indexOf(event.target);
      updateSwiper();
    }
  });

  createPagination();
}
