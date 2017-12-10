$(document).ready(function () {

  /*  $('nav').load("menu.html");
    $('.interested').load("interested.html");
    $('.footer').load("footer.html");
    $('.copyright').load("copyright.html");*/

  function random(owlSelector) {
    owlSelector.children().sort(function () {
      return Math.round(Math.random()) - 0.5;
    }).each(function () {
      $(this).appendTo(owlSelector);
    });
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 5) {
      $('.navbar-fixed-top').addClass("switch");
      $('.navbar-fixed-top .navbar-nav').addClass("fadeInDown")
        .addClass("shrink");
      $('.scrollToTop').fadeIn();
    } else {
      $('.navbar-fixed-top').removeClass("switch");
      $('.navbar-fixed-top .navbar-nav').removeClass("fadeInDown")
        .removeClass("shrink");
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $("#index-carousel").owlCarousel({

    autoPlay: 3000,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true

  });

  $("#people-carousel").owlCarousel({

    autoPlay: 8000,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    beforeInit: function (elem) {
      random(elem);
    }

  });

  $("#milife-price-carousel").owlCarousel({
    navigation: true,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ],
    slideSpeed: 300,
    pagination: false,
    singleItem: true

  });

  $("#testimonial-carousel").owlCarousel({

    autoPlay: 5000,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    beforeInit: function (elem) {
      random(elem);
    }

  });

  $('.navbar-nav li:nth-child(2) a').on('click', function (e) {
    $('html, body').animate({
      scrollTop: $("#our-services").offset().top
    }, 'slow');
  });

  $('.tabs .tab-links a').on('click', function (e) {
    var currentAttr = $(this).attr('href');

    if ($('body').find('#milife-header').length) {

      // Toggle current tab to active
      $(this).parent('li').toggleClass('active').siblings().removeClass('active');

      // Toggle tabs
      $('.tab' + currentAttr).siblings().hide();
      $('.tab' + currentAttr).toggle('slide', {
        direction: 'right'
      }, 200);
      $('.tab' + currentAttr).toggleClass('active').siblings().removeClass('active');

    } else {

      // Show/Hide Tabs
      $('.tab' + currentAttr).fadeIn(400).siblings().hide();
      $('.tab' + currentAttr).addClass('active').siblings().removeClass('active');

      // Change/Remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');

    }

    e.preventDefault();
  });

  $('.corporate .view_btn').on('click', function (e) {
    $('#corporate-more').toggle('slide', {
      direction: 'right'
    }, 400);

    e.preventDefault();
  });

  if ($(window).width() < 768) {
    $('.tab-links').addClass('hidden-xs');
    $('.tabs button').on('click', function (e) {
      $('.tab-links').toggleClass('hidden-xs');

      e.preventDefault();
    });
    $('.tab-links a').on('click', function (e) {
      $('.tab-links').addClass('hidden-xs');
      $('html, body').animate({
        scrollTop: $("#tab-btn").offset().top
      }, 'slow');
    });
  }

  $(".dial").knob({
    'min': 01,
    'readOnly': true,
    'thickness': 1,
    'inputColor': "#838383",
    'width': 87,
    'height': 87,
    'font': "Open Sans",
    'fontWeight': 300
  });

  $('form.methods label').on('click', function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });

  $('.input-button input[type=radio] + label').on('click', function () {
    var thisInputButton = $(this).closest('.input-button');

    thisInputButton.addClass('checked');
    thisInputButton.parent('li').siblings().find('.input-button').removeClass('checked');

    thisInputButton.siblings('.expand').slideDown();
    thisInputButton.parent('li').siblings().find('.expand').slideUp();
  });

  $('.input-button input[type=checkbox] + label').on('click', function () {
    var thisInputButton = $(this).closest('.input-button');
    var collapseLink = thisInputButton.find('.collapse-button').attr('href');
    
    $(collapseLink + ' input').prop('checked', !(thisInputButton.find('input').is(':checked')));
    
    if (thisInputButton.find('input').prop('checked') == false) {
      $(thisInputButton).addClass('checked');
      $(collapseLink + ' .input-button').addClass('checked');
    } else {
      $(thisInputButton).removeClass('checked');
      $(collapseLink + ' .input-button').removeClass('checked');
    }
  });

});