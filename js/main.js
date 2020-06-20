console.clear();

let alterClass = function () {
    let ww = $(window).width();
    let wh = $(window).height();
    return {
        width: ww,
        height: wh,
        outerWidth: $(window).outerWidth()
        // outerWidthTrue: $(window).outerWidth(true),
    };
};

$(window).resize(function () {
    let wh = alterClass();
    console.log(wh);
});

alterClass(); //Fire it when the page first loads:

// https://fullcalendar.io/docs/getting-started
// https://fullcalendar.io/docs/initialize-globals-demo
document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ["interaction", "dayGrid", "timeGrid", "list", "moment", "rrule"],
        defaultView: "dayGridMonth",
        themeSystem: "standard",
        locale: "ru",
        selectable: true,
        height: 450,
        


        // plugins: ["interaction", "dayGrid", "timeGrid"],
        // defaultView: "dayGridMonth",


        editable: false,
        navLinks: false,

        // ALLOW "MORE" LINK WHEN TOO MANY EVENTS
        eventLimit: true,

        /* HEADER */
        header: {
            left: "prev,next",
            center: "title",
            right: "btnReload,dayGridMonth"
        },
        // header: {
        //     left: "prevYear,prev,next,nextYear, today",
        //     center: "title",
        //     right: "dayGridMonth,listWeek,listDay, btnReload"
        // },

        /* HEADER */

        // header: {
        //  left: "prev,next today",
        //  center: "title",
        //  right: "dayGridMonth,timeGridWeek,timeGridDay"
        // },

        /* HEADER */
        views: {
            listDay: {
                buttonText: "День"
            },
            listWeek: {
                buttonText: "Неделя"
            }
        },

        /* HEADER */
        buttonText: {
            today: "Сегодня"
        },

        /* HEADER */
        customButtons: {
            btnReload: {
                text: "↻",
                click: function () {
                    // calendar.refetchEvents();
                    // document.location.reload();
                    console.log("btnReload...");
                }
            }
        },

        /* EVENT TIME FORMAT */
        eventTimeFormat: {
            hour: "2-digit",
            minute: "2-digit"
        },

        events: [{
                title: "All Day Event",
                start: "2019-06-01"
            },
            {
                title: "Long Event",
                start: "2019-06-07",
                end: "2019-06-10"
            },
            {
                groupId: "999",
                title: "Repeating Event",
                start: "2019-06-09T16:00:00"
            },
            {
                groupId: "999",
                title: "Repeating Event",
                start: "2019-06-16T16:00:00"
            },
            {
                title: "Conference",
                start: "2019-06-11",
                end: "2019-06-13"
            },
            {
                title: "Meeting",
                start: "2019-06-12T10:30:00",
                end: "2019-06-12T12:30:00"
            },
            {
                title: "Lunch",
                start: "2019-06-12T12:00:00"
            },
            {
                title: "Meeting",
                start: "2019-06-12T14:30:00"
            },
            {
                title: "Birthday Party",
                start: "2019-06-13T07:00:00"
            },
            {
                title: "Click for Google",
                url: "http://google.com/",
                start: "2019-06-28"
            },

            {
                title: "recurring ",

                // FREQ:
                // YEARLY = 0
                // MONTHLY = 1
                // WEEKLY = 2
                // DAILY = 3
                rrule: {
                    dtstart: "2019-06-28T08:30:01"
                },

                // rrule: {
                //   dtstart: "2020-01-01T08:30:01",
                //   until: "2020-02-21",
                //   freq: 1,
                //   interval: 1,
                //   count: 1,
                //   // byweekday: ["MO", "TU", "WE", "TH", "FR"],
                //   // count: 100,
                // },
                color: "green"
            }
        ]
    });

    calendar.render();
});








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