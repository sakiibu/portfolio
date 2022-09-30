$(".header__nav--btn").click(function(){
    $(this).toggleClass('active');
    $(".header__nav").toggleClass('active');
});

$(function(){
    $(window).scroll(function(){
        $(".fade").each(function(){
            var scroll = $(window).scrollTop();
            var blockPosition = $(this).offset().top;
            var windowHeihgt = $(window).height();
            if (scroll > blockPosition - windowHeihgt +50){
                $(this).addClass("fade-in");
            }
        });
    });

    $('.works__slider').slick({
        infinite: true,
        speed: 500,
        dots: false,
        centerMode: true,
        centerPadding: '28%',
        prevArrow: '<img src="../img/arrow.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="../img/arrow.png" class="slide-arrow next-arrow">',
        responsive:[
            {
                breakpoint: 960,
                settings:{
                    centerPadding: '0px',
                    slidesToShow:1,
                    arrows:false
                }
            }
        ]
    });
});