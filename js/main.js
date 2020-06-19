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
    $(this).toggleClass('active');
    $(this).addClass('block');
});
$('.like-btn').on('mouseout', function () {
    $(this).removeClass('block');
});
// like__btn

// var button = document.querySelector("btn-text");
// button.onclick = function() {
//        document.querySelector(".xpandable-blockw").classList.toggle('opened');
//         return false;
//     };
// $(document).ready(function () {
//     $('.btn-text').click(function (event) {
//         $('.xpandable-block').toggleClass('opened') ;
//     });
// });





/* drop_down1-start */





/* drop_down1-end */
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function () {
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
    //function
    switchAccordion = function (e) {
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();













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
