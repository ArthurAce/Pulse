/* $('.slide-box').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg" alt="1"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg" alt="1"></button>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

}); */

const slider = tns({
  container: '.slide-box',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  nav: false,
  controls: false
});

slider.getInfo();

document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
  slider.goTo('next');
};

$('ul.catalogue__list').on('click', 'li:not(.catalogue__var_active)', function() {
  $(this)
    .addClass('catalogue__var_active').siblings().removeClass('catalogue__var_active')
    .closest('div.market').find('div.market__content').removeClass('market__content_active').eq($(this).index()).addClass('market__content_active');   
});


/* Переключение ссылок, каждая ссылка описана отдельной функцией
$('.market-box__link').each(function(i) {
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.market-box__item').toggleClass('market-box__item_active');
    $('.market-box__info').toggleClass('market-box__info_active');
  })
})

$('.market-box__back').each(function(i) {
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.market-box__item').toggleClass('market-box__item_active');
    $('.market-box__info').toggleClass('market-box__info_active');
  })
}) */


/* Переключение ссылок, с помощью одной функции с перестановкой переменных
 */
function toggleSlide/* Имя переменной */(item) {
  $(item).each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.market-box__item').eq(i).toggleClass('market-box__item_active');
      $('.market-box__info').eq(i).toggleClass('market-box__info_active')
    })
    })
}

toggleSlide('.market-box__link');
toggleSlide('.market-box__back')
