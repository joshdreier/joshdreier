// Tell the DOM that JS is enabled
document.body.className += ' js-enabled';

// Detect for Mouse vs. Keyboard events for accessibility helpers
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 9) {
    jQuery('html').addClass('keyboard-user');
  }
});

document.addEventListener('mousedown', function (e) {
  jQuery('html').removeClass('keyboard-user');
});


$(function() {

  if ( $('.swiper-container').length > 0 ) {

    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })

  }

});