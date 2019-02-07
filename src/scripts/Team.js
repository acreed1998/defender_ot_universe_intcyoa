function teamSectionFiller(data) {
  if($('#section-Team').length !== 0) {
    //Populate the Team Section
    $('#section-Team').append($('<div>').addClass('openingText').attr({'id' : 'section-Team-div-team-opening'}).html(data.team.opening));
    $('#section-Team').append($('<div>').addClass('choicesHolder').attr({'id' : 'section-Team-div-team'}));
    let counter = 0;
    let row = 0;
    _.each(data.team.choices, (choice, choiceKey) => {
      if (counter % 2 === 0) {
        row++;
        $('#section-Team-div-team').append($('<div>').addClass('choices').attr({ 'id': `section-Team-div-team-row-${row}`}));
      }
      $(`#section-Team-div-team-row-${row}`).append($('<div>').addClass('choice').css({'width' : '50%'}).attr({'id' : `section-Team-div-team-${choiceKey}`}).html(choice.text));
      counter++;
    });
  }
}