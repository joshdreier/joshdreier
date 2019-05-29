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


$(document).ready(function() {

  if ( $('.swiper-container').length > 0 ) {

    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })

  }

});


var AKQA = AKQA || {};

AKQA.randomFunction = (function() {

  init = function() {

    console.log('i did it!');

    for(i = 0; i < 5; i++) {
      console.log(i);
    }

    function oldPerson(name, age) {
      this.name = name;
      this.age = age;
    }

    var you = new Person('Josh', 40); 


    console.log(you.name);

    function add(x, y) {
      var total = x + y;
      console.log(total);
      return total;
    }

    add(3, 4);

    function Person(first, last) {
      return {
        first: first,
        last: last,
        fullName: function() {
          return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
          return this.last + ', ' + this.first;
        }
      };
    }

    josh = Person('Josh', 'Dreier');

    console.log(josh.fullNameReversed());

    console.log(new Person('Simon', 'Willison'));


  }

  init();


})();