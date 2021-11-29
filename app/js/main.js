document.addEventListener('DOMContentLoaded', function(){

    new Swiper('.review-slider', {
        wrapperClass: 'slider__wrapper',
        slideClass: 'slider__slide',
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.review__btn-next',
            prevEl: '.review__btn-prev',
        }
    });

    new Swiper('.order-slider', {
        wrapperClass: 'slider__wrapper',
        slideClass: 'slider__slide',
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.order__btn-next',
            prevEl: '.order__btn-prev',
        }
    });

    new Swiper('.repair-slider', {
        wrapperClass: 'slider__wrapper',
        slideClass: 'slider__slide',
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.repair__btn-next',
            prevEl: '.repair__btn-prev',
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


});