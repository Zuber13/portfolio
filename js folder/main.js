$(document).ready(function() {
  $("#menuIcon").on("click", function() {
    $(".menu_bar").toggleClass("active");
  });

  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html,body").animate(
      {
        scrollTop: $target.offset().top
      },
      1000,
      "swing"
    );
  });
});
