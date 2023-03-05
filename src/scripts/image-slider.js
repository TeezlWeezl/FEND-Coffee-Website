import $ from "jquery";
import 'slick-carousel-latest/slick/slick'

$(document).ready(function () {
  $('.product-container__products').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slick-prev"><span>›</span></button>',
    nextArrow: '<button class="slick-next"><span>›</span></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 2,
        }
      }
    ]
  });
});