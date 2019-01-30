function makesYouSpecial() {
  $.getJSON('src/data/json_for_index.json', function(data) {
    if ($('#section-You').length !== 0) {
          // Populate the makes you special section // 
      $('#section-You').append($('<div>').addClass('openingText').attr({ "id": "section-You-div-special-opening" }).html(data.special.opening));
      $('#section-You').append($('<div>').addClass('choices').attr({ "id": "section-You-div-choices" }));
      _.each(data.special.choices, function(choice, choiceKey){
        $('#section-You-div-choices').append($('<div>').addClass('choice').css({ "width": `25%` }).attr({ "id": `section-You-div-choices-${choiceKey}` }).html(choice));
      });

    // Populate the races section //
      $('#section-You').append($('<div>').addClass('openingText').attr({'id' : 'section-You-div-races-opening'}).html(data.race.opening));
      $('#section-You').append($('<div>').addClass('choicesHolder').attr({'id': "section-You-div-races"}));
      let counter = 0;
      let row = 0;
      _.each(data.race.choices, function(choice, choiceKey){
        if (counter % 3 === 0) {
          if (counter !== 1) {
            row++;
          }
          $(`#section-You-div-races`).append($('<div>').addClass('choices').attr({'id' : `section-You-div-races-row-${row}`}));
        }
        $(`#section-You-div-races-row-${row}`).append($('<div>').addClass('choice').css({'width' : '33%'}).attr({'id' : `section-You-div-races-${choiceKey}`}).html(choice.text));
        counter++;
      });
    }

  })
}