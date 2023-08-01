import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function startSwiper() {
    new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        centeredSlides: false,
        slidesPerGroupSkip: 4,
        grabCursor: true,
        spaceBetween: 38,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}