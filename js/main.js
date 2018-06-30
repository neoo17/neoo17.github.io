$( document ).ready(function() {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('body').addClass('header-active');
        } else {
            $('body').removeClass('header-active');
        }
    });
    $('.header-nav-primary-more').hover(
        function(){ $(this).toggleClass('hover-active')
     });
});