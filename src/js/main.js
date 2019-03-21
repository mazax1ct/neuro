(function($) {
  $.fn.removeClassWild = function(mask) {
    return this.removeClass(function(index, cls) {
      var re = mask.replace(/\*/g, '\\S+');
      return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
    });
  };
})(jQuery);

$('.stack__top').on('click', function () {
  $(this).parent('.stack').addClass('is-open');
  $(this).parent('.stack').find('.js-slider-init').slick('setPosition');
});

$('.stack__close').on('click', function () {
  $('.stack').removeClass('is-open');
});

$('#field .field__cell').on('click', function () {
  $(this).toggleClass('is-active');
});

$('.js-card-action').on('click', function () {
  $(this).closest('.stack').addClass('action');
});

$('.js-column-action').on('click', function () {
  $('#action-field').removeClassWild('action-*');
  $('#action-field').addClass($(this).attr('data-action'));
});

$(document).ready(function () {

  var fieldHeight = $('.field-block').height();
  var fieldWidth = $('.field-block').width();

  if(fieldHeight < fieldWidth) {
    $('.field').width(fieldHeight);
    $('.field').height(fieldHeight);
  } else {
    $('.field').height(fieldWidth);
    $('.field').width(fieldWidth);
  }

  $('.js-slider-init').slick({
    dots: false,
    arrows: false
  });
});
