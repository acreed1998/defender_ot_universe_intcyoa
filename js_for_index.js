$(document).ready(function () {
  //create the navigation bar
  const $navigationDiv = $("<div>").addClass('navigator').appendTo('body');
  //get data from the json and use it to populate the navigation bar and add hidden sections to the body
  $.getJSON('json_for_index.json', function (data) {
    _.each(data.misc_data.sections, function(section) {
      const $navDivOptions = $('<div>').addClass('navButton').attr({ "id": `navbar-div-${section}`}).append($("<a>").attr({ "id": `navbar-a-${section}` }).text(section).hover(function () { $(this).css({ "color": "yellow" }) }, function () { $(this).css({ "color": "white" }) }).css({"cursor": "pointer"}).click(function(){showSection(section)})).appendTo($navigationDiv);
      const $bodySection = $('<section>').addClass('bodySection').attr({"id" : `secion-${section}`}).css({"display" : "none"}).appendTo('body');
    });
  });

});