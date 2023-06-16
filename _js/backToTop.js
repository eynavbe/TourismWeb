$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('#back2Top').show();
    } 
    else {
        $('#back2Top').hide();
    }
});