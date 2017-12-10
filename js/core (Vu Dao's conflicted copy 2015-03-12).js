$(document).ready(function () {
  
/*  $('nav').load("menu.html");
  $('.interested').load("interested.html");
  $('.footer').load("footer.html");
  $('.copyright').load("copyright.html");*/
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 5) {  
      $('.navbar').addClass("switch");
    }
    else {
      $('.navbar').removeClass("switch");
    }
  });
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 5) {
      $('.navbar-nav').addClass("fadeInDown")
                      .addClass("shrink");
    }
    else {
      $('.navbar-nav').removeClass("fadeInDown")
                      .removeClass("shrink");
    }
  });
  
  $("#index-carousel").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
  });
  
  $('.tabs .tab-links a').on('click', function (e) {
    var currentAttr = $(this).attr('href');
    
    // Show/Hide Tabs
    $('.tab' + currentAttr).fadeIn(400).siblings().hide();
    $('.tab' + currentAttr).addClass('active').siblings().removeClass('active');
    
    // Change/Remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    
    e.preventDefault();
  });
  
  if ($(window).width() < 768) {
    /*$('.tabs .tab-links a').on('click', function (e) {
      var currentAttr = $(this).attr('href');
    
      // Show/Hide Tabs
      $('.tab' + currentAttr).fadeIn(400).siblings().hide();
      $('.tab' + currentAttr).addClass('active').siblings().removeClass('active');
      $('.tabs .tab-links').addClass('hidden-xs');
      $('.tabs .tab-content').removeClass('hidden-xs');

      // Change/Remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');

      e.preventDefault();
      
    });
    
    $('.tab-content .btn').on('click', function (e) {
      $('.tabs .tab-links').removeClass('hidden-xs');
      $('.tabs .tab-content').addClass('hidden-xs');
      
      e.preventDefault();
    });*/
    $('.tab-links').addClass('hidden-xs');
    $('.tabs button').on('click', function (e) {
      $('.tab-links').toggleClass('hidden-xs');
    });
    $('.tab-links a').on('click', function (e) {
      $('.tab-links').addClass('hidden-xs');
      $('html, body').animate({ scrollTop: $("#tab-btn").offset().top }, 'slow');
    });
  }

});