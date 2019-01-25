$(document).ready(function () {
  //create the navigation bar
  const $navigationDiv = $("<div>").addClass('navigator').appendTo('body');
  //get data from the json and use it to populate the navigation bar and add hidden sections to the body
  const $mainDiv = $("<div>").addClass('main').appendTo('body');
  $.getJSON('json_for_index.json', function (data) {
    console.log(data);
    const screenWidth = $('html')[0].scrollWidth / data.misc_data.sections.length / data.misc_data.sections.length;
    const jsonRemove = removeExta;
    const getTheWidth = getWidth;
    _.each(data.misc_data.sections, function(section) {
      const $navDivOptions = $('<div>').addClass('navButton').css({"padding" : `${screenWidth}px`}).attr({ "id": `navbar-div-${jsonRemove(section)}`}).append($("<a>").attr({ "id": `navbar-a-${jsonRemove(section)}` }).text(section).hover(function () { $(this).css({ "color": "yellow" }) }, function () { $(this).css({ "color": "white" }) }).css({"cursor": "pointer"}).click(function(){showSection(jsonRemove(section))})).appendTo($navigationDiv);
      const $bodySection = $('<section>').addClass('bodySection').attr({"id" : `section-${jsonRemove(section)}`}).css({"display" : "none"}).appendTo($mainDiv);
    });
    //populate the Opening section
    if ($('#section-Opening').length !== 0) {
      $('#section-Opening').css({ "display": "block"});
      $('#section-Opening').append($('<div>').addClass('openingText').attr({"id" : "section-Opening-div-opening"}).html(data.opening));
    }
    if ($('#section-You').length !== 0) {
      const sectionYouSections = new Array(3);
      for (let keys in data) {
        if (keys === "abilities") {
          sectionYouSections[2] = keys;
        } else if (keys === "race") {
          sectionYouSections[1] = keys;
        } else if (keys === "special") {
          sectionYouSections[0] = keys;
        }
      }
      _.each(sectionYouSections, function(section) {
        $('#section-You').append($('<div>').addClass('openingText').attr({ "id": `section-You-div-opening-${section}` }).html(data[`${section}`].opening));
        $('#section-You').append($('<div>').addClass('choices').attr({ "id": `section-You-div-choices-${section}` }));
        _.each(data[`${section}`].choices, function (choice, choiceKey) {
          console.log(choice);
          $(`#section-You-div-choices-${section}`).append($('<div>').addClass('choice').css({ "width": `25%` }).attr({ "id": `section-You-div-choices-${section}-${choiceKey}` }).html(choice.text?choice.text:choice));
        })
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

function getWidth(...args) {
  let val = $('html')[0].scrollWidth;
  console.log(args);
  for (let i = 0; i < args; i++) {
    val = val / args[i];
  }
  return val;
} 