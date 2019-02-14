function eventsSectionFiller(data) {
  if ($('#section-Events').length !== 0) {
    // Populate the events for the events section //
    $('#section-Events').append($('<div>').addClass('openingText').attr({'id' : 'section-Events-div-events-opening'}).html(data.events.opening));
    $('#section-Events').append($('<div>').addClass('choicesHolder').attr({ 'id': 'section-Events-div-events'}));
    let counter = 0;
    let row = 0;
    _.each(data.events.choices, (choice, choiceKey) => {
      if (counter % 2 === 0) {
        row++;
        $('#section-Events-div-events').append($('<div>').addClass('choices').attr({ 'id': `section-Events-div-events-row-${row}`}));
      }
      $(`#section-Events-div-events-row-${row}`).append($('<div>').addClass('choice').css({'width' : '50%'}).attr({'id' : `section-Events-div-events-${choiceKey}`}).html(choice.text));
      counter++;
    });
  }
}