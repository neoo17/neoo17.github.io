$( document ).ready(function() {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 1 ) {
            $('body').addClass('header-active');
        } else {
            $('body').removeClass('header-active');
        }
    });
    $('#sidebar').scrollToFixed({marginTop: 43});
});