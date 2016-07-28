var target = $('#categories').offset().top;
var skilltarget = $('#skills').offset().top;
var scrollBottom;
$(window).scroll(function() {
    if ($(window).scrollTop() > target) {
        $('#navbar').fadeIn();
        $('#categories').fadeOut();
    } else {
        $('#categories').fadeIn();
        $('#navbar').fadeOut();   
    }
    scrollBottom = $(window).scrollTop() + $(window).height();
    if (scrollBottom > skilltarget) {
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
            },1800);
        });
    }
});

$(document).ready(function() {
    $(".rotate").textrotator({
        animation: "fade",
        separator: "; ",
    speed: 2250
    });
    $("#work-detail").hide();


});





/*
function renderNight() {
}
*/

function reveal(element) {
    $('#work-container .work-obj').each(function() {
        if (!$(this).hasClass(element)) {
            $(this).animate({opacity:'.1'}, 200);
        }
        else {
            $(this).animate({opacity:'1'}, 200);
        }
    });
};

