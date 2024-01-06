//   home_page_carosal===================================================//
$('.owl_base_theme_1').owlCarousel({
  loop: true,

  nav: false,
  dots: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 5000,
  autoplaySpeed: 3000,
  autoplayHoverPause: true,
  items: 1,
});

$('.owl_base_theme_2').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1,

    },
    600: {
      items: 1,

    },
    1000: {
      items: 1,

    }
  }
});


$('.owl_base_theme_3').owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots:false,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 5000,
  autoplaySpeed: 1000,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1,

    },
    600: {
      items: 1,

    },
    1000: {
      items: 5,

    }
  }
});
//   home_page_carosal===================================================//

//   game_page_carosal==================================================//
$('.owl_base_theme_2').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  slideTransition: 'linear',
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  items: 1,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
//   game_page_carosal==================================================//
$('.owl_base_theme_3').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  slideTransition: 'linear',
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  items: 1,
  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
})
//   game_page_carosal==================================================//

// game_page_js==========================================================//
$("#button").click(function () {
  $(".main_left_sidebar").addClass("main");
});
$("#base").click(function () {
  $(".main_left_sidebar").removeClass("main");
});
$("#dash").click(function () {
  $(".hide_menu").addClass("base");
  $(".upcoming-event").addClass("base_form");
});
$("#icon").click(function () {
  $(".hide_menu").removeClass("base");
  $(".upcoming-event").removeClass("base_form");

});
$("#menu").click(function () {
  $(".tabs_main").addClass("base_info");
});
// casino_tab_js==========================================================================//
$(".casion_game .casion_tabs ul li a").click(function () {
  $(".casion_game .casion_tabs ul li a").removeClass("active")
  $(this).addClass("active");
  var tabContent = $(this).attr("tab-content");
  $(".portfolio_row").hide();
  $(tabContent).show();
});
// casino_tab_js==========================================================================//
// game_page_js==========================================================//
// detail_page_js====================================================//
$(".toggle_icon").click(function () {
  $(".tab_row").toggleClass("show");
  $(".toggle_icon a i").toggleClass("trigger");
});

$(".tab_blue").click(function () {
  $(".bet_collapse").fadeIn("show_collapse");
});
$(".cross_icon").click(function () {
  $(".bet_collapse").fadeOut("show_collapse");
});
$(".drop_up").click(function () {
  $(this).parents(".tab_row").toggleClass("main");
  // $(".drop_up a i").toggleClass("main");
});

$(".user-settings a").click(function () {
  $(".setting_dropdown").fadeToggle();
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".setting_dropdown").length
                === 0) {
        $(".setting_dropdown").hide();
    }
});
});
$(".avtar a").click(function () {
  $(".profile_list").fadeToggle();
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".profile_list").length
                === 0) {
        $(".profile_list").hide();
    }
});
});
$(".hide_on a").click(function () {
  $(".click_collapse").fadeToggle();
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".click_collapse").length
                === 0) {
        $(".click_collapse").hide();
    }
});

});
$(".click_cross").click(function () {
  $(".click_collapse").fadeOut();

});
$(".click_list .switch").click(function () {
  $(".click_btn").fadeToggle();
});


$(".form-check-input").click(function () {
  $("body").toggleClass("theme");
});

// detail_page_js====================================================//
// datepicker jquerry=======================================//
$(document).ready(function () {
  $(function () {
    $(".datepicker").datepicker();
  });
});
// datepicker jquerry=======================================//
// datatable_jquerry===============================================
$(document).ready(function () {
  $('#example').DataTable();
});
$(document).ready(function () {
  $('#example1').DataTable();
});
// datatable_jquerry===============================================

$(document).ready(function(){
  $(".link").click(function(){
    $(".icon_plus").toggleClass("intro");
    $(".sub_menu").slideToggle("slow");
  });
});
$(document).ready(function(){
  $(".link1").click(function(){
    $(".icon_plus").toggleClass("intro");
    $(".sub_menu1").slideToggle("slow");
  });
});
$(document).ready(function(){
  $(".link2").click(function(){
    $(".icon_plus").toggleClass("intro");
    $(".sub_menu2").slideToggle("slow");
  });
});
$(document).ready(function(){
  $(".link3").click(function(){
    $(".icon_plus").toggleClass("intro");
    $(".sub_menu3").slideToggle("slow");
  });
  
});






