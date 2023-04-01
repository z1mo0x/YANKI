var slideIndex = 1;
var timer = null;
var delay = 5000;
const slider = document.querySelector('.categories__slider');
const cardsWrapper = document.querySelector('.categories__cards');
const slides = document.querySelectorAll('.categories__card');
const slidesImg = document.querySelectorAll('.categories__card > img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
var slide = document.querySelectorAll('.card');
var slideText = document.querySelectorAll('.card__text');


slideText.forEach((text) => {
    slidesImg.forEach((slide) => {
        text.style.width = slide.getBoundingClientRect().width + 'px';
    })
})

var cardsWrapperWidth = cardsWrapper.getBoundingClientRect().width;

if (window.screen.width > 1200) {
    slider.style.width = ((cardsWrapperWidth / 4) * (slides.length - 3)) + 'px';
    slides.forEach((slide) => {
        var slideWidth = slide.getBoundingClientRect().width;
        var marginLeft = slide.style.marginLeft = (((((cardsWrapperWidth + 25) / 4)) - slideWidth)) + 'px';
    })
} else if (window.screen.width <= 1200 && window.screen.width > 993) {
    slider.style.width = ((cardsWrapperWidth / 3) * (slides.length - 2)) + 'px';
    slides.forEach((slide) => {
        var slideWidth = slide.getBoundingClientRect().width;
        var marginLeft = slide.style.marginLeft = (((((cardsWrapperWidth + 70) / 3)) - slideWidth)) + 'px';

    })
} else if (window.screen.width <= 993 && window.screen.width > 768) {
    slider.style.width = ((cardsWrapperWidth / 2) * slides.length) + 'px';
    slides.forEach((slide) => {
        var slideWidth = slide.getBoundingClientRect().width;
        var marginLeft = slide.style.marginLeft = (((((cardsWrapperWidth + 200) / 2)) - slideWidth)) + 'px';
    })
} else if (window.screen.width <= 768 && window.screen.width > 578) {
    slider.style.width = ((cardsWrapperWidth) * slides.length) + 'px';
}

console.log(screen.width);
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {

    if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }

    if (screen.width > 1200) {
        if (slideIndex <= 1) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }

        if (slideIndex == (slide.length - 3)) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }

    } else if (window.screen.width <= 1200 && window.screen.width > 993) {
        if (slideIndex <= 1) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }

        if (slideIndex == (slide.length - 2)) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
    }
    else if (window.screen.width <= 993 && window.screen.width > 768) {
        if (slideIndex <= 1) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }

        if (slideIndex == (slide.length - 1)) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
    } else {
        if (slideIndex <= 1) {
            prev.style.display = 'none';
        } else {
            prev.style.display = 'flex';
        }

        if (slideIndex == (slide.length)) {
            next.style.display = 'none';
        } else {
            next.style.display = 'flex';
        }
    }


    slide[slideIndex - 1].classList.add('active-slide');
}

var translate = 0;

prev.addEventListener('click', function () {
    if (window.screen.width > 1200) {
        translate += ((cardsWrapperWidth + 25) / 4);
    } else if (window.screen.width <= 1200 && window.screen.width > 993) {
        translate += ((cardsWrapperWidth + 70) / 3);
    } else if (window.screen.width <= 993 && window.screen.width > 768) {
        translate += ((cardsWrapperWidth + 200) / 2);
    } else if (window.screen.width <= 768 && window.screen.width < 993) {
        translate += cardsWrapperWidth;
        console.log(translate);
    }

    for (slideOne of slide) {
        slideOne.style.transform = 'translate(' + translate + 'px' + ')';
        slideOne.classList.remove('active-slide');
    }
    slide[slideIndex - 1].classList.add('active-slide');
});

next.addEventListener('click', function () {
    if (window.screen.width > 1200) {
        translate += -((cardsWrapperWidth + 25) / 4);
    } else if (window.screen.width <= 1200 && window.screen.width > 993) {
        translate += -((cardsWrapperWidth + 70) / 3);
    } else if (window.screen.width <= 993 && window.screen.width > 768) {
        translate += -((cardsWrapperWidth + 200) / 2);
    } else if (window.screen.width <= 768 && window.screen.width < 993) {
        translate += -cardsWrapperWidth;
        console.log(translate);
    }

    for (slideTwo of slide) {
        slideTwo.style.transform = 'translate(' + translate + 'px' + ')';
        slideTwo.classList.remove('active-slide');
    }
    slide[slideIndex - 1].classList.add('active-slide');
});
