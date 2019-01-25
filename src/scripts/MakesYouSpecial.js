function makesYouSpecial() {
  $.getJSON('./src/data/json_for_index.json', function(data) {
    if ($('#section-You').length !== 0) {
      $('#section-You').append($('<div>').addClass('openingText').attr({ "id": "section-You-div-special-opening" }).html(data.special.opening));
      $('#section-You').append($('<div>').addClass('choices').attr({ "id": "section-You-div-choices" }));
      _.each(data.special.choices, function(choice, choiceKey){
        $('#section-You-div-choices').append($('<div>').addClass('choice').css({ "width": `25%` }).attr({ "id": `section-You-div-choices-${choiceKey}` }).html(choice));
      });
    }
  })
}