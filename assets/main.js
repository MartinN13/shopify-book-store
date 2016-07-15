$(document).ready(function() {
  $(".search-input").click(function() {
    $(".search-input").val("");
  });

  $(".search-input").focusout(function() {
    $(".search-input").val("Search Book");
  });

  function resizeCards() {
    $(".book").height($(".book").width() / 1.75);

    $(".book-cover").height($(".book").width() / 2.0132743363);
    $(".book-cover").width($(".book-cover").height() / 1.614);
    $(".book-image").width($(".book-cover").width());
    $(".book-image").css("left", $(".book").width() / 22.75);

    $(".book-info").css("left", 25 + parseFloat($(".book-image").css("left")) + 
                        $(".book-cover").width() + parseFloat($(".book-image").css("left")) * 1.5);
    $(".book-info").width($(".book-col").outerWidth() - parseFloat($(".book-info").css("left")) - 
                          parseFloat($(".book-image").css("left")) * 1.5 - 25);
  }

  $(window).resize(function() {
    resizeCards();
  });
});