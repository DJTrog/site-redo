$( document ).ready(function() {
  $('.scrollLink3').click( function() {
       $('html, body').animate({
            scrollTop: $('#topic3').offset().top
       }, 1000);
  });
  $('.scrollLink2').click( function() {
       $('html, body').animate({
            scrollTop: $('#topic2').offset().top
       }, 600);
  });

});
