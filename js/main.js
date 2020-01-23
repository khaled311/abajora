$(function() {
  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this)
      .find(".megaMenu")
      .slideToggle();
    $(this)
      .siblings()
      .find(".megaMenu")
      .slideUp();
    $(this)
      .toggleClass("open");
    $(this)
      .siblings()
      .removeClass("open");
    e.stopPropagation();
  });

  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(".sideNav").toggleClass("open");
    // $(".navover").toggleClass("open");
    $("html").css("overflow-y", "hidden");
    // setTimeout(function() {
    //   $(".sideNav").addClass("origin");
    // }, 500);
  });

  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if ($(".sideNav").hasClass("open")) {
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      // $(".sideNav").toggleClass("origin");
      $("html").css("overflow-y", "auto");
      // setTimeout(function() {
      //   $(".sideNav").removeClass("origin");
      // }, 600);
    }
  });

  // Search
  $(".searchTriger").on("click", function() {
    $(".search").addClass("open");
    $("html").css("overflow-y", "hidden");
    $(".search input").focus();
    $(".navover").toggleClass("open");
  })

  $(".navover, .search > span").on("click", function() {
    $(".navover").removeClass("open");
    $(".search").removeClass("open");
    $("html").css("overflow-y", "auto");
  })

  // Main Slider
  $(".main-slider .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: [
      "<span class='lnr lnr-chevron-right'></span>",
      "<span class='lnr lnr-chevron-left'></span>"
    ]
  });

  $(".products .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 5,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      480:{
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 3,
        dots: true
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    navText: [
      "<span class='lnr lnr-chevron-right'></span>",
      "<span class='lnr lnr-chevron-left'></span>"
    ]
  });

  // Categories Slider
  $(".categories .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    dots: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 4
      },
      991: {
        items: 5
      }
    },
    navText: [
      "<span class='lnr lnr-chevron-right'></span>",
      "<span class='lnr lnr-chevron-left'></span>"
    ]
  });

  //footer accordion
  if ($(window).width() < 992) {
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $(".foot-links button").on("click", function() {
    $(this).toggleClass("trans");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".collapse")
      .collapse("hide");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find("button")
      .removeClass("trans");
  });

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove()
    });
  });

  // Animation On Scroll
  // AOS.init({
  //   once: true
  // });

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".loader").fadeOut(400, function() {
      $(this).remove()
    });
  });

  // Header DropDown
  $(".header .btn-group").hover(
    function() {
      $(this).addClass("open");
    },
    function() {
      $(this).removeClass("open");
    }
  );
});
