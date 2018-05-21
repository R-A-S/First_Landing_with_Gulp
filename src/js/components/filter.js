function filter() {

  // init Isotope
  var $grid = $('.works-grids').imagesLoaded(function () {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: '.works-grid',
      layoutMode: 'fitRows',
      getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function (itemElem) {
          var weight = $(itemElem).find('.weight').text();
          return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
      }
    });
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };

  // bind filter button click
  $('.works-nav').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });

  // bind sort button click
  $('#sorts').on('click', 'button', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
      sortBy: sortByValue
    });
  });

  // change is-checked class on buttons
  $('.works-nav').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
}