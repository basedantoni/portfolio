$(document).ready(function(){
  $('.card-container').slick({
    // prev arrow
    prevArrow:'<button type="button" class="slick-prev slick-arrow"></button>',
    // next arrow
    nextArrow:'<button type="button" class="slick-next slick-arrow"></button>',
  });
});

$('.slick-arrow').prop('value', '');