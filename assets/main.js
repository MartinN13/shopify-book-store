$(document).ready(function() {
  $(".form-control").mousedown(function() {
    $(".form-control").val("");
  });

  $(".form-control").focusout(function() {
    $(".form-control").val("Search Book");
  });

  $(".book-genre").each(function(){
    if (this.href == document.location) {
      jQuery(this).addClass("current");
    }
  });

  if ($(document.body).height() < $(window).height()) {
    $("footer").addClass("navbar-fixed-bottom");
  }

  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoWidth: true,
    stagePadding: 310,
    loop: true,
    margin: 1,
    center: true,
    dots: false,
  });
});