document.addEventListener('DOMContentLoaded', function(){

//  скролл по блокам
    // const anchors = document.querySelectorAll('a[href*="#"]')
    const links = document.querySelectorAll('.menu__link');

    for(let item of links) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.header__holder').classList.remove('header__holder--active');
            document.querySelector('.header').classList.remove('header--height');
            document.querySelectorAll('.header__button-item').forEach(el => {
                el.classList.remove('header__button-item--active');
            });
            const id = item.getAttribute('href').substr(1);
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }    

//  СКРОЛЛ HEADER
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function(){
        if(window.scrollY >= 100) {
            header.classList.add('header--active');
        }
        else {
            header.classList.remove('header--active');
        }
    });

// выезжающее меню
    document.querySelector('.header__button').addEventListener('click', function(){
        document.querySelector('.header__holder').classList.toggle('header__holder--active');
        document.querySelector('.header').classList.toggle('header--height');
        document.querySelectorAll('.header__button-item').forEach(item => {
            item.classList.toggle('header__button-item--active');
        });
    });    

// 

//  МОДАЛЬНОЕ ОКНО ЗАПИСЬ НА БЕСПЛАТНОУЮ КОНСУЛЬТАЦИЮ    
    const homeModal = document.querySelector('.advice-modal');
    document.querySelector('.home__btn').addEventListener('click', function(){
        homeModal.classList.add('advice-modal--active');
    });
    document.querySelectorAll('.advice-modal__exit').forEach(elem => {
        elem.addEventListener('click', function(){
            homeModal.classList.remove('advice-modal--active');
            document.querySelector('.advice-modal__form').classList.remove('advice-modal__form--hidden');
            document.querySelector('.advice-modal__ready').classList.remove('advice-modal__ready--active');
            document.querySelectorAll('.advice-modal__input').forEach(input => {
                input.value = '';
                input.classList.remove('advice-modal__input--active');
                input.classList.remove('advice-modal__input--green');
            });
        });    
    });

//  валидация
    document.querySelectorAll('.advice-modal__input').forEach(input => {
        input.addEventListener('change', function(){
            input.classList.add('advice-modal__input--green');
        });
    });    
// КНОПКА ЗАПИСИ, ОТПРАВКА ДАННЫХ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
    document.querySelector('.advice-modal__btn').addEventListener('click', function(e){
        e.preventDefault();
        let n = 0;
        document.querySelectorAll('.advice-modal__input').forEach(input => {
            if(input.value == '') {
                input.classList.add('advice-modal__input--active');
            }
            else {
                n++;
            }
        });
        
        if(n == 2) {
            document.querySelector('.advice-modal__form').classList.add('advice-modal__form--hidden');
            document.querySelector('.advice-modal__ready').classList.add('advice-modal__ready--active');
        }

    });

//  СЛАЙДЕРЫ 
    new Swiper('.review-slider', {
        wrapperClass: 'slider__wrapper',
        slideClass: 'slider__slide',
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.review__btn-next',
            prevEl: '.review__btn-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            645: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            965: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });

    new Swiper('.order-slider', {
        wrapperClass: 'slider__wrapper',
        slideClass: 'slider__slide',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.order__btn-next',
            prevEl: '.order__btn-prev',
        },
        breakpoints: {
            356: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1070: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    new Swiper('.repair-slider', {
        wrapperClass: 'slider__wrapper',
        slideClass: 'slider__slide',
        slidesPerView: 1,
        // spaceBetween: 40,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.repair__btn-next',
            prevEl: '.repair__btn-prev',
        },
        breakpoints: {
            // 335: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            // },
            // 720: {
            //     slidesPerView: 3,
            //     spaceBetween: 10
            // },
            // 1070: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            // 1280: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // }
        }
    });

    new Swiper('.work-slider', {
        wrapperClass: 'work-slider__wrapper',
        slideClass: 'work-slider__slide',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.work-slider__btn-next',
            prevEl: '.work-slider__btn-prev',
        }
    });

    new Swiper('.slides-contact__slider', {
        wrapperClass: 'slides-contact__wrapper',
        slideClass: 'slides-contact__slide',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.slides-contact__btn-next',
            prevEl: '.slides-contact__btn-prev',
        }
    });



// ОБРАТНЫЙ ОТСЧЁТ     

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.' + id);
        const daysSpan = clock.querySelector('.clock-sale__days');
        const hoursSpan = clock.querySelector('.clock-sale__hours');
        const minutesSpan = clock.querySelector('.clock-sale__minutes');
        const secondsSpan = clock.querySelector('.clock-sale__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }
    const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clock-sale', deadline); 


    new WOW().init();

});