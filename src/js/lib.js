import Swiper from 'swiper/bundle';
import {Autoplay, EffectFade, EffectCoverflow, EffectFlip, EffectCube } from 'swiper/modules';
Swiper.use({ Autoplay, EffectFade, EffectCoverflow, EffectFlip, EffectCube});



const headSlide = new Swiper('.homeHead__content-text', {
   loop: true,
   autoplay: true,
   speed: 2000,
   autoplayDisableOnInteraction:true,
   pagination: false,
   effect: 'fade',
   fadeEffect: {
     crossFade: true
    },
  });

 



  const swiper2 = new Swiper('.job__carusel', {
   effect: 'coverflow',
   loop: true,
   speed: 2000,
   autoplay: true,
   centeredSlides: true,
   autoHeight: true,
   slidesPerView: 4,
   centeredSlides: true,
   coverflow: {
     rotate: 30,
     stretch: 400,
     depth: 400,
   },
   breakpoints: {
       320: {
           slidesPerView: 'auto',
         },
         910: {
           slidesPerView: 4,
         },
   }
  });

  const swiper3 = new Swiper('.reviews__slider', {
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: false,
    effect: 'flip',
    flipEffect: {
       slideShadows: false,
    },
    speed: 2000,
    autoHeight: true,
  });

  const swiper4 = new Swiper('.blog__slider', {
    speed: 400,
    autoHeight: true,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: true,
    pagination: false,
 
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 20,
    //
    slidesPerView: 4,
    //
    centeredSlides: false,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
    breakpoints: {
       320: {
          slidesPerView: 1,
       },
       480: {
          slidesPerView: 2,
       },
       740: {
          slidesPerView: 3,
       },
       992: {
          slidesPerView: 4,
       },
    }
  });

  const swiper5 = new Swiper('.sidebar__widget-job', {
   loop: true,
   autoplay: true,
   // If we need pagination
   pagination: false,
   effect: 'cube',
   cubeEffect: {
      slideShadows: false,
   },
   speed: 2000,
   autoHeight: true,
});

  const swiper6 = new Swiper('.sidebar__widget-reviews', {
   loop: true,
   autoplay: true,
   // If we need pagination
   pagination: false,
   effect: 'cube',
   cubeEffect: {
      slideShadows: false,
   },
   speed: 2000,
   autoHeight: false,
});

var acc = document.getElementsByClassName("faq__vop-wrap");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("faq__active");
     var panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
     }
   });
 }





