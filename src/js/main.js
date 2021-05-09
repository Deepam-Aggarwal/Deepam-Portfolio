$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    $(".toggle-icon").on("click", function () {
      $(".my-navbar").toggleClass("show");
      $(".mainmenu-area").toggleClass("show");
    });

    $("#nav-icon3").click(function () {
      $(this).toggleClass("open");
    });

    $(".my-navbar .mynav-item").on("click", function (e) {
      if (!$(this).hasClass("active")) {
        var tabNum = $(this).index();
        var nthChild = tabNum + 2;
        $(".my-navbar .mynav-item").removeClass("active");
        $(this).addClass("active");
        $("#main > section.active").removeClass("active");
        $("#main > section:nth-child(" + nthChild + ")").addClass("active");
      }
      e.preventDefault();
    });

    $("#home .pagelink").on("click", function (e) {
      e.preventDefault();
      if (e.target.parentNode.id = "g-p-f-h") {
        $(".my-navbar .mynav-item").removeClass("active");
        $(".my-navbar .mynav-item.portfolio").addClass("active");
        $(".my-navbar .mynav-item .portfolio").addClass("active");
        $(".project-gallery").addClass("active");
      }
    });

    //Mixitup js
    $(".project-gallery").mixItUp();

    /*Typed Activate*/
    var $typed = $("#typed");
    if ($typed.length > 0) {
      $typed.typed({
        strings: ["Web Design", "Web Development", "UI/UX Design"],
        stringsElement: null,
        typeSpeed: 70,
        startDelay: 150,
        backSpeed: 40,
        backDelay: 350,
        loop: true,
        loopCount: 550,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: "html",
      });
    }

    // statistics jquery circle progressbar initialization
    var $section = $("#statisticsSection");
    if ($section.length > 0) {
      $(".progress-circle").loading();
    }

    $(".lightbox").magnificPopup({
      type: "image",
    });

    $(".image-preview").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    // Ajax On Modal 
    $(".service-area-wrapper").each(function () {
      $(this).magnificPopup({
        delegate: ".service-modal:visible",
        type: "ajax",
        tLoading:
          '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
        mainClass: "mfp-fade",
        closeBtnInside: true,
        midClick: true,
        gallery: {
          enabled: true,
        },
      });
    });
    $('.project-gallery-item').each(function() {
      $(this).magnificPopup({
        delegate: '.pp:visible',
          type: "ajax",
        tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
        mainClass: "mfp-fade",
        closeBtnInside: true,
        midClick: true,
        gallery: {
            enabled: true,
          },
        callbacks: {
          ajaxContentAdded: function() {
            $(".owl-carousel").each(function (index) {
              var a = $(this);
              $(this).owlCarousel({
              autoplay: a.data('autoplay'),
              center: a.data('center'),
              autoplayTimeout: a.data('autoplaytimeout'),
              autoplayHoverPause: a.data('autoplayhoverpause'),
              loop: a.data('loop'),
              speed: a.data('speed'),
              nav: a.data('nav'),
              dots: a.data('dots'),
              autoHeight: a.data('autoheight'),
              autoWidth: a.data('autowidth'),
              margin: a.data('margin'),
              stagePadding: a.data('stagepadding'),
              slideBy: a.data('slideby'),
              lazyLoad: a.data('lazyload'),
              navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
              animateOut: a.data('animateOut'),
              animateIn: a.data('animateIn'),
              video: a.data('video'),
              items: a.data('items'),
              responsive:{
                0:{items: a.data('items-xs'),},
                576:{items: a.data('items-sm'),},
                768:{items: a.data('items-md'),},
                992:{items: a.data('items-lg'),}
              }	
                      });
                  });
              }
          }
      });
      });
});

  $(window).on('load', function () {
    /*Preloader*/
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
  });




});