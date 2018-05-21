var btn = $('.header-body__burger'),
  menu = $('.header-body'),
  mask = $('.mask');

function menuShow() {
  btn.on('click', function () {
    menu.toggleClass('is-active');
    mask.toggleClass('is-active');
  });
}