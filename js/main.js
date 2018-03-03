/*Меню*/
(function ($) {
    $(function () {
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    });
})(jQuery);

/*Скролл наверх*/
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


/* Modal box */

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger-for-modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/* Gallery filters */
var humans = $(".humans"),
    animals = $(".animals"),
    movement = $(".movement"),
    nature = $(".nature");

function toggleHuman() {
    $('a.human[data-fancybox]').fadeToggle("slow", "linear");
    $('a[data-fancybox]:not(.human)').fadeOut("fast", "linear");
    humans.toggleClass('selected');
    $('.gallery-filter:not(.humans)').removeClass('selected');
}
function toggleAnimal() {
    $('a.animal[data-fancybox]').fadeToggle("slow", "linear");
    $('a[data-fancybox]:not(.animal)').fadeOut("fast", "linear");
    animals.toggleClass('selected');
    $('.gallery-filter:not(.animals)').removeClass('selected');
}
function toggleMovement() {
    $('a.movement-photo[data-fancybox]').fadeToggle("slow", "linear");
    $('a[data-fancybox]:not(.movement-photo)').fadeOut("fast", "linear");
    movement.toggleClass('selected');
    $('.gallery-filter:not(.movement)').removeClass('selected');
}
function toggleNature() {
    $('a.nature-photo[data-fancybox]').fadeToggle("slow", "linear");
    $('a[data-fancybox]:not(.nature-photo)').fadeOut("fast", "linear");
    nature.toggleClass('selected');
    $('.gallery-filter:not(.nature)').removeClass('selected');
}
humans.click(toggleHuman);
animals.click(toggleAnimal);
movement.click(toggleMovement);
nature.click(toggleNature);



