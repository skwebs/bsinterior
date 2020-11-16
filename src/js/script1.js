!(function ($) {
  "use strict";

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