document.addEventListener('DOMContentLoaded', () => {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            550: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
            1145: {
                slidesPerView: 4,
            },
        },
    });

    let swiper2 = new Swiper(".partnersSwiper", {
        slidesPerView: 1,
        spaceBetween: 25,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            475: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 3,
            },
            740: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
            1100: {
                slidesPerView: 6,
            }
        },
    });

    let swiper3 = new Swiper(".courcesSwiper", {
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
        },
    });

    let swiper4 = new Swiper(".teachersSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            840: {
                slidesPerView: 2,
            },
            1230: {
                slidesPerView: 3,
            },
        },
    });
});