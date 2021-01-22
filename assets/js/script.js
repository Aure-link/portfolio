(function($) {
    $(window).on('load', function(){
      $(".loader").fadeOut(1000);
    });
    $('.portfolio #lineWork').on('load', function(){
      $(".loader").fadeOut(1000);
    });
    $(document).ready(function() {
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });
        $('.hamburger').click(function(){
             $('.navbar .right').slideToggle('normal');
             $('.navbar .container').css('margin-top', '29px');
             $('.hamburger').toggleClass('fa-bars');
             $('.hamburger').toggleClass('fa-times');
        });
        // init Masonry
        var $grid = $('.grid').masonry({
          itemSelector: '.grid-item',
          percentPosition: true,
          columnWidth: '.grid-sizer'
        });
        // // layout Isotope after each image loads
        // $grid.imagesLoaded().progress( function() {
        //   $grid.masonry();
        // });
    });
})(jQuery);
