function youSectionFiller(data) {
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
        row++;
        $(`#section-You-div-races`).append($('<div>').addClass('choices').attr({'id' : `section-You-div-races-row-${row}`}));
      }
      $(`#section-You-div-races-row-${row}`).append($('<div>').addClass('choice').css({ 'width': `${Math.floor(screen.availWidth) * 0.33}px`}).attr({'id' : `section-You-div-races-${choiceKey}`}).html(choice.text));
      counter++;
    });

    // Populate the Abilities section //
    $('#section-You').append($('<div>').addClass('openingText').attr({'id' : 'section-You-div-abilities-opening'}).html(data.abilities.opening));
    $('#section-You').append($('<div>').addClass('choicesHolder').attr({'id' : 'section-You-div-abilities'}));
    counter = 0;
    row = 0;
    _.each(data.abilities.choices, function(choice, choiceKey) {
      if (counter % 4 === 0) {
        row++;
        $(`#section-You-div-abilities`).append($('<div>').addClass('choices').attr({'id' : `section-You-div-abilities-row-${row}`}));
      }
      $(`#section-You-div-abilities-row-${row}`).append($('<div>').addClass('choice').css({ 'width': '25%' }).attr({ 'id': `section-You-div-abilities-${choiceKey}` }).html(choice.text));
      counter++;
    });
  }
}