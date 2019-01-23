$(document).ready(function () {
  //create the navigation bar
  const $header = $("<hr>").addClass('def-header').text("Defender of the Universe").appendTo('body');
  const $navigationDiv = $("<div>").addClass('navigator').appendTo('body');
  //get data from the json and use it to populate the navigation bar and add hidden sections to the body
  $.getJSON('json_for_index.json', function (data) {
    console.log(data);
    const screenWidth = $('html')[0].scrollWidth / data.misc_data.sections.length / data.misc_data.sections.length;
    const jsonRemove = removeExta;
    _.each(data.misc_data.sections, function(section) {
      const $navDivOptions = $('<div>').addClass('navButton').css({"padding" : `${screenWidth}px`}).attr({ "id": `navbar-div-${jsonRemove(section)}`}).append($("<a>").attr({ "id": `navbar-a-${jsonRemove(section)}` }).text(section).hover(function () { $(this).css({ "color": "yellow" }) }, function () { $(this).css({ "color": "white" }) }).css({"cursor": "pointer"}).click(function(){showSection(jsonRemove(section))})).appendTo($navigationDiv);
      const $bodySection = $('<section>').addClass('bodySection').attr({"id" : `section-${jsonRemove(section)}`}).css({"display" : "none"}).appendTo('body');
    });
    //populate the Opening section
    if ($('#section-Opening').length !== 0) {
      $('#section-Opening').css({ "display": "block"});
      $('#section-Opening').append($('<div>').addClass('openingText').attr({"id" : "section-Opening-div-opening"}).html(data.opening));
    }
    if ($('#section-You').length !== 0) {
      $('#section-You').append($('<div>').addClass('openingText').attr({"id" : "section-You-div-opening"}).html(data.special.opening));
      $('#section-You').append($('<div>').addClass('choices').attr({"id" : "section-You-div-choices"}));
      _.each(data.special.choices, function(choice, choiceKey) {
        $('#section-You-div-choices').append($('<div>').addClass('choice').attr({"id" : `section-You-div-choices-${choiceKey}`}).html(choice));
      })
    }
  });
});

function removeExta(string) {
  string = string.split("");
  _.each(string, function(letter, index) {
    if (letter === "&" || letter === " ") {
      string[index] = "-";
    }
  });
  return string.join("");
}

function showSection(section) {
  const $arrayOfSections = Array.from($("section"));
  _.each($arrayOfSections, function(functionSection, index) {
    functionSection.style.display = "none";
    if (functionSection.id === `section-${section}`) {
      functionSection.style.display = "block";
    }
  });
}