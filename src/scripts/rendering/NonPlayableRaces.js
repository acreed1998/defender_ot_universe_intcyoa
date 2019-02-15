function nprSectionFiller(data) {
  if ($('#section-NPR').length !== 0) {
    $('#section-NPR').append($('<div>').addClass('openingText').attr({'id' : 'section-NPR-div-npr-opening'}).html(data.non_playable_characters.opening));
    $('#section-NPR').append($('<div>').addClass('choicesHolder').attr({'id' : 'section-NPR-div-npr'}));
    let counter = 0;
    let row = 0;
    _.each(data.non_playable_characters.choices, (choice, choiceKey) => {
      if (counter % 3 === 0) {
        row++;
        $('#section-NPR-div-npr').append($('<div>').addClass('choices').css({ 'width': '100%' }).attr({ 'id': `section-NPR-div-npr-row-${row}`}));
      }
      $(`#section-NPR-div-npr-row-${row}`).append($('<div>').addClass('choice').css({ 'width': `33.35%`}).attr({'id' : `section-NPR-div-npr-${choiceKey}`}).html(choice.text));
      counter++;
    });
  }
}