const track = document.querySelector('.track');
const carousel = document.querySelector('.carousel');

const left = document.querySelector('.left');
const right = document.querySelector('.right');
let babaWidth = document.querySelector('.baba').offsetWidth;
let carouselWidth = carousel.offsetWidth;

let index = 0;
let sumOfRight = 0;
let sumOfLeft = 0;

let initialPosition = null;
let moving = false;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;


right.addEventListener('click', function () {
    console.log(babaWidth);
    console.log(sumOfRight);
    console.log(track.offsetWidth);
    console.log(((sumOfRight + babaWidth) < track.offsetWidth) );

    track.classList.add('smooth-transition');
    index++;
    left.classList.add('show');
    sumOfRight = sumOfRight + carouselWidth;

    if ((sumOfRight + carouselWidth) < track.offsetWidth) {
        track.style.transform = track.style.transform + `translate(-${carouselWidth}px)`;
    } else {
        track.style.transform = `translate(-${track.offsetWidth - carouselWidth}px)`;
    }

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        // right.classList.add('hide');
        right.classList.add('lock');
    }
});

left.addEventListener('click', function () {
    track.classList.add('smooth-transition');
    sumOfLeft = sumOfRight - carouselWidth;

    if (sumOfLeft >= carouselWidth) {
        track.style.transform = track.style.transform + `translate(${carouselWidth}px)`;
    } else {
        track.style.transform = `translate(-${0}px)`;
    }
    index--;
    // right.classList.remove('hide');
    right.classList.remove('lock');
    sumOfRight -= carouselWidth;
    if (index === 0) {
        left.classList.remove('show');
    }

});




const gestureStart =  (e) => {
   initialPosition = e.pageX;
   moving = true;
   const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
   if (transformMatrix !== 'none') {
       transform = parseInt(transformMatrix.split(',')[4].trim());
   }
};

const gestureMove = (e) => {
    track.classList.remove('smooth-transition');
    if (moving) {

        // const currentPosition = e.pageX;
        const diff = e.pageX - initialPosition;
        if (e.pageX - lastPageX > 0) {
            if (transformValue > 0) {
                return;
            }
        } else {
            if (Math.abs(transformValue) > track.offsetWidth - carousel.offsetWidth ) {
                return;
            }
        }
        transformValue = parseInt(transform) + diff;
        track.style.transform = `translateX(${transformValue}px)`;
    }
    lastPageX = e.pageX;
};

const gestureEnd =  (e) => {
    moving = false;
    console.log(carousel.offsetWidth);
};


if (window.PointerEvent) {

    carousel.addEventListener('pointerdown', gestureStart);

    carousel.addEventListener('pointermove', gestureMove);

    carousel.addEventListener('pointerup',gestureEnd);
} else {

    carousel.addEventListener('touchdown', gestureStart);

    carousel.addEventListener('touchmove', gestureMove);

    carousel.addEventListener('touchup',gestureEnd);

    carousel.addEventListener('mousedown', gestureStart);

    carousel.addEventListener('mousemove', gestureMove);

    carousel.addEventListener('mouseup',gestureEnd);
}