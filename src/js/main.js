//функция удаления класса по маске
(function($) {
  $.fn.removeClassWild = function(mask) {
    return this.removeClass(function(index, cls) {
      var re = mask.replace(/\*/g, '\\S+');
      return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
    });
  };
})(jQuery);

//инициализация фильтра карт
$('.js-cards-slider').slick({
  dots: false,
  arrows: false,
  infinite: false
});

//обработчик смены слайда
$('.js-cards-slider').on('afterChange', function() {
  $('.js-card-action').attr('data-id', $('.slick-current').attr('id')); //обновляем id в кнопке предпросмотра действия
});

var filtered = false;

//открытие попапа
$('.neuro__row-cell').on('click', function () {
  if($(this).hasClass('js-opponent') || $(this).hasClass('js-drop')) {
    $('.slider-popup').addClass('is-open').toggleClass('viewing'); //открытие попапа со слайдером карт противника

    //фильтрация слайдера
    if (filtered === false) {
      $('.js-cards-slider').slick('slickFilter', $("#2, #4")); //передаём id карт для фильтрации
      filtered = true;
    } else {
      $('.js-cards-slider').slick('slickUnfilter');
      filtered = false;
    }

    $('.js-cards-slider').slick('setPosition'); //обновление слайдера

    $('.js-card-action').attr('data-id', $('.slick-current').attr('id')); //обновляем id в кнопке предпросмотра действия
  } else if($(this).hasClass('js-hand')) {
    $('.slider-popup').addClass('is-open'); //открытие попапа со слайдером карт в руке

    //фильтрация слайдера
    if (filtered === false) {
      $('.js-cards-slider').slick('slickFilter', $("#3, #4")); //передаём id карт для фильтрации
      filtered = true;
    } else {
      $('.js-cards-slider').slick('slickUnfilter');
      filtered = false;
    }

    $('.js-cards-slider').slick('setPosition'); //обновление слайдера

    $('.js-card-action').attr('data-id', $('.slick-current').attr('id')); //обновляем id в кнопке предпросмотра действия
  } else if($(this).hasClass('js-card-info')){
    var cardID = $(this).find('.card').attr('data-id');
    $('.card-popup').addClass('is-open'); //открытие попапа с информацией о карте
    $('#cards').find('.card[data-id="'+ cardID +'"]').appendTo('#card-info');
  }
});

//закрытие попапа
$('.popup__close').on('click', function () {
  $('.popup').removeClass('is-open').removeClass('viewing');
  //сброс фильтра слайдера
  $('.js-cards-slider').slick('slickUnfilter');
  filtered = false;
  //возвращаем карту в блок карт если открывали информацию о ней
  $('#card-info').find('.card').appendTo('#cards');
});

$('#field .field__cell').on('click', function () {
  $(this).toggleClass('is-active');
});

//открытие блока действия
$('.js-card-action').on('click', function () {
  if($(this).attr('data-id') > 0) {
    $('.action[data-id="'+ $(this).attr('data-id') +'"]').addClass('is-open');
  } else {
    alert('Ошибка - на найден id действия, копайте парни!');
  }
});

//закрытие блока действия
$('.action__close').on('click', function () {
  $('.action').removeClass('is-open');
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
