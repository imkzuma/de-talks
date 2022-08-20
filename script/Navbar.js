$(function () {
    $(document).scroll(function () {
      let $navbar = $(".navbar");
      $navbar.toggleClass('scrolled', $(this).scrollTop() > $navbar.height());
    });
});