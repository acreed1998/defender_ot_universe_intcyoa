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

    // Populate the unique rewards section //
    $('#section-Events').append($('<div>').addClass('openingText').attr({'id' : 'section-Events-div-uniqueRewards-opening'}).html(data.unique_rewards.opening));
    $('#section-Events').append($('<div>').addClass('choicesHolder').attr({ 'id': 'section-Events-div-uniqueRewards'}));
    counter = 0;
    row = 0;
    const rowMarkers = [2, 4, 5, 6, 8];
    _.each(data.unique_rewards.choices, (choice, choiceKey) => {
      if (_.contains(rowMarkers, counter)) {
        row = addRowC(row);
      }
      if (row === 2 || row === 3 || row === 5) {
        $(`#section-Events-div-uniqueRewards-row-${row - 1}`).append($('<div>').addClass('choice centeredChoice').css({ 'width': `${Math.floor(screen.availWidth) * 0.75}px`}).attr({'id' : `section-Events-div-${choiceKey}`}).html(choice.text));
      } else {
        $(`#section-Events-div-uniqueRewards-row-${row - 1}`).append($('<div>').addClass('choice').css({ 'width': '50%' }).attr({ 'id': `section-Events-div-${choiceKey}`}).html(choice.text));
      }
      counter++;
    });
  }
}

function addRowC(rowNum) {
  $('#section-Events-div-uniqueRewards').append($('<div>').addClass('choices').attr({ 'id': `section-Events-div-uniqueRewards-row-${rowNum}` }));
  rowNum = rowNum + 1;
  return rowNum;
}