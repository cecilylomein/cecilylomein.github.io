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



$('.work-obj').click(function() {

    if (!($(this).is('.no-dialog'))) {
        var d = $(this).children('.work-dialog');

        vex.dialog.open({
            message: d.html(),
            buttons: []
        });
    } 


    $('.thumb').click(function () {
        if ($(this).is('.video')) {
            $(this).parent().next().find('#work-closeup').html('<video width="600" controls><source src="img/art/' + $(this).attr('name') + '.mp4" type="video/mp4">Your browser does not support the video tag.</video>').show();
        } else {
            $(this).parent().next().find('#work-closeup').html('<img class="closeup" src="img/art/' + $(this).attr('name') + '.png" alt="' + $(this).attr('id') + '"/>').show();
        }
            var info = '#' + $(this).attr('name') + '-info';
            var infotext = $(this).parent().next().find(info).html();
            $(this).parent().next().find('#work-info').html(infotext).show();

    });
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

