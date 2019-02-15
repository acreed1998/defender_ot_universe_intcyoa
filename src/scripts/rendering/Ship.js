function shipSectionFiller(data) {
  if($('#section-Ship').length !== 0) {
    //Populate the Ship (Type) Section//
    $("#section-Ship").append($('<div>').addClass('openingText').attr({'id' : 'section-Ship-div-ship-opening'}).html(data.ship.opening));
    $("#section-Ship").append($('<div>').addClass('choices').attr({'id' : 'section-Ship-div-ship'}));
    _.each(data.ship.choices, function(choice, choiceKey) {
      $('#section-Ship-div-ship').append($('<div>').addClass('choice').css({'width' : '25%'}).attr({'id' : `section-Ship-div-ship-${choiceKey}`}).html(choice.text));
    });

    //Populate the Ship Style Section//
    $('#section-Ship').append($('<div>').addClass('openingText').attr({'id' : 'section-Ship-div-shipStyles-opening'}).html(data.ship_style.opening));
    $('#section-Ship').append($('<div>').addClass('choicesHolder').attr({'id' : 'section-Ship-div-shipStyles'}));
    let counter = 0;
    let row = 0;
    _.each(data.ship_style.choices, (choice, choiceKey) => {
      if (counter % 3 === 0) {
        row++;
        $('#section-Ship-div-shipStyles').append($('<div>').addClass('choices').css({'width' : '100%'}).attr({'id' : `section-Ship-div-shipStyles-row-${row}`}));
      }
      $(`#section-Ship-div-shipStyles-row-${row}`).append($('<div>').addClass('choice').css({ 'align-items': 'stretch', 'width': `calc(100% / 3)` }).attr({ 'id': `section-Ship-div-shipStyles-${choiceKey}`}).html(choice.text));
      counter++;
    });

    //Populate the Ship Traits Section//
    $('#section-Ship').append($('<div>').addClass('openingText').attr({'id' : 'section-Ship-div-shipTraits-opening'}).html(data.ship_traits.opening));
    $('#section-Ship').append($('<div>').addClass('choicesHolder').attr({'id' : 'section-Ship-div-shipTraits'}));
    counter = 0;
    row = 0;
    const rowMarkers = [4, 8, 12, 16, 20, 24, 28, 31, 34] 
    _.each(data.ship_traits.choices, (choice, choiceKey) => {
      if (_.contains(rowMarkers, counter)) {
        row = addRow(row);
      }
      if (row === 7 || row === 8) {
        $(`#section-Ship-div-shipTraits-row-${row - 1}`).append($('<div>').addClass('choice three-row').css({ 'align-items': 'stretch', 'width': 'calc(100% / 3)' }).attr({ 'id': `section-Ship-div-shipTraits-${choiceKey}` }).html(choice.text));
      } else {
        $(`#section-Ship-div-shipTraits-row-${row - 1}`).append($('<div>').addClass('choice').css({ 'width': '25%' }).attr({ 'id': `section-Ship-div-shipTraits-${choiceKey}` }).html(choice.text));
      }
      counter++;
    });
  }
}
//helper function for adding rows to uneven tables//
function addRow(rowNum) {
  $('#section-Ship-div-shipTraits').append($('<div>').addClass('choices').css({ 'width': '100%' }).attr({'id' : `section-Ship-div-shipTraits-row-${rowNum}`}));
  rowNum = rowNum + 1;
  return rowNum;
}