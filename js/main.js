// $(document).ready(function () {
//     $('.zoom-gallery').magnificPopup({
//         delegate: 'a',
//         type: 'image',
//         closeOnContentClick: false,
//         closeBtnInside: false,
//         mainClass: 'mfp-with-zoom mfp-img-mobile',
//         image: {
//             verticalFit: true,
//             titleSrc: function (item) {
//                 return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
//             }
//         },
//         gallery: {
//             enabled: true
//         },
//         zoom: {
//             enabled: true,
//             duration: 300, // don't foget to change the duration also in CSS
//             opener: function (element) {
//                 return element.find('img');
//             }
//         }

//     });
// });

// $(document).ready(function () {
//     $('.open__modal').click(function (event) {
//         $('body').toggleClass('lock');

//     });
// });

// like__btn
$('.like-btn').on('click', function () {
    $(this).toggleClass('is-active');
});
// like__btn



// галерея__модальное__окно
document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close__window"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });
});
// галерея__модальное__окно

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        // autoplay: true,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
