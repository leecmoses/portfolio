var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        let linkRef = $(this).attr('href');
        let position = $(linkRef).offset().top;
        $('html, body').animate({
            scrollTop : position
            }, 1000)
})