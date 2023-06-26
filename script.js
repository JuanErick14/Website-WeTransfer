new Swiper ('.swiper-container',{
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        320:{
            slidesPerView: 2
        },
        550:{
            slidesPerView: 3
        },
        768:{
            slidesPerView: 4
        },
        990:{
            slidesPerView: 5
        },
    }
});