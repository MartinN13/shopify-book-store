$(document).ready(function() {
  $(".form-control").click(function() {
    $(".form-control").val("");
  });

  $(".form-control").focusout(function() {
    $(".form-control").val("Search Book");
  });
});