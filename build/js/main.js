$('.stack__top').on('click', function () {
  $(this).parent('.stack').addClass('is-open');
});

$('.stack__close').on('click', function () {
  $('.stack').removeClass('is-open');
});

$('.field__cell').on('click', function () {
  $(this).toggleClass('is-active');
});

$(document).ready(function () {
  var fieldHeight = $('.field').height();
  var fieldWidth = $('.field').width();
  if(fieldHeight < fieldWidth) {
    $('.field').width(fieldHeight);
  } else {
    $('.field').height(fieldWidth);
  }
});
