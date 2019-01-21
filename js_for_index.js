$(document).ready(function () {
  //create the navigation bar
  const $header = $("<hr>").addClass('def-header').text("Defender of the Universe").appendTo('body');
  const $navigationDiv = $("<div>").addClass('navigator').appendTo('body');
  //get data from the json and use it to populate the navigation bar and add hidden sections to the body
  $.getJSON('json_for_index.json', function (data) {
    const screenWidth = $('html')[0].scrollWidth / data.misc_data.sections.length / data.misc_data.sections.length;
    _.each(data.misc_data.sections, function(section) {
      const $navDivOptions = $('<div>').addClass('navButton').css({"padding" : `${screenWidth}px`}).attr({ "id": `navbar-div-${section}`}).append($("<a>").attr({ "id": `navbar-a-${section}` }).text(section).hover(function () { $(this).css({ "color": "yellow" }) }, function () { $(this).css({ "color": "white" }) }).css({"cursor": "pointer"}).click(function(){showSection(section)})).appendTo($navigationDiv);
      const $bodySection = $('<section>').addClass('bodySection').attr({"id" : `section-${section}`}).css({"display" : "none"}).appendTo('body');
    });
    //populate the You section
    if ($('#section-You').length !== 0) {
      $('#section-You').css({ "display": "block"});
      $('#section-You').append($('<div>'))
    }
  });
});