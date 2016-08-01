$(document).ready(function() {
  $(".form-control").mousedown(function() {
    $(".form-control").val("");
  });

  $(".form-control").focusout(function() {
    $(".form-control").val("Search Book");
  });

  $(".book-genre").each(function(){
    if (this.href == document.location) {
      jQuery(this).addClass("active");
    }
  });

  if ($(document.body).height() < $(window).height()) {
    $("footer").addClass("navbar-fixed-bottom");
  }
});