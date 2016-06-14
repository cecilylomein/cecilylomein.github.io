
var target = $('#categories').offset().top;

$(window).scroll(function() {
    
    if ($(window).scrollTop() > target) {
        $('#navbar').fadeIn();
        $('#categories').fadeOut();
    } else {
        $('#categories').fadeIn();
        $('#navbar').fadeOut();   
    }
});


$(".rotate").textrotator({
        animation: "fade",
        separator: "; ",
    speed: 2250
    });

    