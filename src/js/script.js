!(function ($) {
  "use strict";

  var $hamburger = $(".hamburger");
  $('.collapse').on('show.bs.collapse', function () {
    $hamburger.addClass("is-active");
  }).on('hide.bs.collapse', function () {
    $hamburger.removeClass("is-active");
  })


})(jQuery);