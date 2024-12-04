const slider = tns({
    container: '.carousel__iner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,
    controls: false,
    autoplayButtonOutput: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});