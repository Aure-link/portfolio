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
        $('.more .button').click(function() {
          $('.line:nth-child(3), .line:nth-child(4)').slideToggle('normal');
          $('.line:nth-child(3), .line:nth-child(4)').addClass('visible');
          $('html, body').animate({
            scrollTop: '+=400px'
          }, 1000);
          setTimeout(function() {
              $('.more').css('display', 'none');
          },100);
        });
        $('.parcours .content .line-1 .more').click(function() {
          $('.parcours .right .content').css('display', 'none');
          $('.parcours .right .content-1').css('display', 'block');
          $('html, body').animate({
            scrollTop: '+=400px'
          }, 1000);
        });
        $('.parcours .content .line-2 .more').click(function() {
          $('.parcours .right .content').css('display', 'none');
          $('.parcours .right .content-2').css('display', 'block');
          $('html, body').animate({
            scrollTop: '+=400px'
          }, 1000);
        });
        $('.parcours .content .line-3 .more').click(function() {
          $('.parcours .right .content').css('display', 'none');
          $('.parcours .right .content-3').css('display', 'block');
          $('html, body').animate({
            scrollTop: '+=400px'
          }, 1000);
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
