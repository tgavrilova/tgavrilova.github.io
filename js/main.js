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

/*Анимация смайликов*/
$(".smail-cont").hover(over, out);

function over() {
    TweenMax.to($(this).find(".smail"), 0.3, {rotation: 360, scale: 1.2, delay: 0.3, ease: Power1.easeOut})
}

function out() {
    TweenMax.to($(this).find(".smail"), 0.3, {rotation: 0, scale: 1, overwrite: "all"})
}

var button = $(".button-to-photo");
button.hover(function () {
    var tl = new TimelineMax();
    tl.to(button, .2, {scale: 1.1, ease:Linear.easeNone})

}, function () {
    var tl = new TimelineMax();
    tl.to(button, .2, {scale: 1, ease:Linear.easeNone})
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
