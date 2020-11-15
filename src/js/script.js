!(function ($) {
  "use strict";

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 30,
    time: 2000
  });

  // waves initialization
  //button
  Waves.init();
  Waves.attach(".flat-button", ["waves-button"]);
  Waves.attach(".flat-button-light", ["waves-button", "waves-light"]);
  Waves.attach(".float-button", ["waves-button", "waves-float"]);
  Waves.attach(".float-button-light", [
    "waves-button",
    "waves-float",
    "waves-light"
  ]);

  // flat
  Waves.attach(".flat-icon", ["waves-circle"]);
  Waves.attach(".flat-icon-light", ["waves-circle", "waves-light"]);
  Waves.attach(".float-icon", ["waves-circle", "waves-float"]);
  Waves.attach(".float-icon-light", [
    "waves-circle",
    "waves-float",
    "waves-light"
  ]);

  //
  Waves.attach(".flat-box", ["waves-block"]);
  Waves.attach(".flat-box-light", ["waves-block", "waves-light"]);
  Waves.attach(".float-box", ["waves-block", "waves-float"]);
  Waves.attach(".float-box-light", [
    "waves-block",
    "waves-float",
    "waves-light"
  ]);
  Waves.attach(".waves-image");
  
  Waves.attach(".nav-link", ["waves-block"]);
  

  /*
  Waves.attach('#snarl-demo', ['waves-button', 'waves-float']);
  
  Snarl.setDefaultOptions({
  timeout: 5000
  });
  
  $('#snarl-demo').click(function() {
  Snarl.addNotification({
  title: 'Snarl Notification',
  text: 'You clicked the Waves button!'
  });
  });
  */

  // Initi AOS
  function aos_init() {
    AOS.init({
      duration: 1500,
      //easing: "ease-in-out-back",
      once: true
     //delay:300
    });
  }
  aos_init();
  
  var $hamburger = $(".hamburger");
  $('.collapse').on('show.bs.collapse', function () {
	  $hamburger.addClass("is-active");
  }).on('hide.bs.collapse', function () {
	  $hamburger.removeClass("is-active");
  })
  
  // gallery page section
  var galleryImages = '';
  for(var i=1;i<40;i++){
  galleryImages += '<div class="col-4 col-md-3 col-lg-2 p-1"  data-aos="fade" data-aos-delay="300"><a class="venobox" data-gall="bsGallery" href="./src/img/gallery/wa/gallery'+i+'.jpg" ><img src="./src/img/gallery/wa/gallery'+i+'.jpg" ></a></div>';
  }
  
  $("#imgBox").html(galleryImages);
  $(".venobox").venobox({
  framewidth : '400px',                            // default: ''
  frameheight: '100%',                            // default: ''
  border     : '10px',                             // default: '0'
  bgcolor    : '#aaa',                          // default: '#fff'
  titleattr  : 'data-title',                       // default: 'title'
  numeratio  : true,                               // default: false
  infinigall : true,
  //spinner    : 'three-bounce',                         // default: false
  share      : ['facebook', 'twitter', 'download'] // default: []
  });
  
})(jQuery);