$(function() {
  $(".search-input").click(function() {
    $(".search-input").val("");
  });

  $(".search-input").focusout(function() {
    $(".search-input").val("Search Book");
  });
});