$(document).ready(function () {
    $('.carousel__iner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></img></button>',
        autoplay: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    autoplay: false,
                    arrows: false,
                }
            }
        ]

    });
});
