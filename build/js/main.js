$('.stack').on('click', function () {
  $(this).addClass('is-open');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".card").length) {
    $('.stack').removeClass('is-open');
  }
  e.stopPropagation();
});

$('.field__cell').on('click', function () {
  $(this).toggleClass('is-active');
});

$(document).ready(function () {
  var fieldHeight = $('.field').height();
  var fieldWidth = $('.field').width();
  if(fieldHeight < fieldWidth) {
    $('.field').width(fieldHeight);
  }
});
