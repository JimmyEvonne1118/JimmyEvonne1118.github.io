$(window).on('beforeunload', function() {
  $(this).scrollTop(0);
});

$(function() {
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();
  var $closeLetter = $('.close-letter');
  var $openingLetter = $('.opening-letter');
  var $letterInvitationStage = $('#letter-invitation-stage')
  var $clickMe = $('.click-me');
  var $mainStage = $('.main-stage');
  var $landingScene = $('#landing-scene');
  var $airplane = $('.airplane');
  var $galleryScene = $('#gallery-scene');
  var $gallery = $('.gallery');
  var $castle = $('.castle');

  $(window).on('load', function() {
    $('#loading-stage').hide();
    $closeLetter.toggleClass('enter');
  })

  $closeLetter.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $('.arrow').css({visibility: 'visible'});
  })

  $closeLetter.on('click', function() {
    $(this).hide();
    skrollr.init();
    $('.opening-letter1').show();
    setTimeout(function() {
      $('.opening-letter1').hide();
      $('.opening-letter2').show();
      setTimeout(function() {
        $('.arrow').hide();
        $('.opening-letter2').addClass('magictime vanishOut');
      }, 300)
    }, 900)
  })

  $('.opening-letter2').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $letterInvitationStage.hide();
    $('body').addClass('main');
    $airplane.toggleClass('enter');
    $('.cloud.year').addClass('enter');
    $('.cloud.month').addClass('enter');
    $('.cloud.date').addClass('enter');
  })

  $('.cloud.year').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $(this).removeClass('enter')
    $(this).addClass('float')
  })
  $('.cloud.month').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $(this).removeClass('enter')
    $(this).addClass('float')
  })
  $('.cloud.date').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
    $(this).removeClass('enter')
    $(this).addClass('float')
  })

  $airplane.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
    $airplane.toggleClass('floating');
  })

  // $landingScene.css({height: viewportHeight});
  $galleryScene.css({height: $galleryScene.width() * 0.74})
  $gallery.css({height: $gallery.width() * 3 / 5});

  var galleryConfig = {
    loop: false,
    speed: 1000,
    autoplay: 3000,
    cube: {
      slideShadows: false
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction: false,
    lazyLoadingInPrevNextAmount: 1
  }

  var tGallery = new Swiper('#t-gallery', galleryConfig);
  var cGallery = new Swiper('#c-gallery', galleryConfig);
  var jGallery = new Swiper('#j-gallery', galleryConfig);

  $('#c-gallery').addClass('hide');
  $('#j-gallery').addClass('hide');

  $('.book1').on('click', function() {
    tGallery.slideTo(0);
    tGallery.startAutoplay();
    $('#t-gallery').removeClass('hide');
    $('#c-gallery').addClass('hide');
    $('#j-gallery').addClass('hide');
  })

  $('.book2').on('click', function() {
    cGallery.slideTo(0);
    cGallery.startAutoplay();
    $('#c-gallery').removeClass('hide');
    $('#t-gallery').addClass('hide');
    $('#j-gallery').addClass('hide');
  })

  $('.book3').on('click', function() {
    jGallery.slideTo(0);
    jGallery.startAutoplay();
    $('#j-gallery').removeClass('hide');
    $('#c-gallery').addClass('hide');
    $('#t-gallery').addClass('hide');
  })

  if (viewportWidth < 500) {
    $castle.attr('data-80p-top', "bottom: -100%")
    $castle.attr('data-65p-top', "bottom: 0");
    $castle.removeAttr('data-25p-top')
  }
})
