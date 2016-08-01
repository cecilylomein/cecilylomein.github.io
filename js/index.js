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
    $(this).scrollTop(0);
    $(".rotate").textrotator({
        animation: "fade",
        separator: "; ",
    speed: 2250
    });
    $("#work-detail").hide();


});



 $(".scroll a").click(function(event){
         event.preventDefault();
         var dest = 0;
         if($(this.hash).offset().top > $(document).height() - $(window).height()){
              dest = $(document).height() - $(window).height();
         } else{
              dest = $(this.hash).offset().top;
         }
     
         $('html, body').animate({scrollTop:dest}, 1000,'swing');
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

