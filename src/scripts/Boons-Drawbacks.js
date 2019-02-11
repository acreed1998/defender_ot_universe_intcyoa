function boonsAndDrawbacksSectionFiller(data) {
  if($('#section-B-D').length !== 0) {
    //Populate the B&D Section//
    $('#section-B-D').append($('<div>').addClass('openingText').attr({'id' : 'section-B-D-div-boons-opening'}).html(data.boons.opening));
    $("#section-B-D").append($('<div>').addClass('choicesHolder').attr({ 'id': 'section-B-D-div-boons'}));
    let counter = 0;
    let row = 0;
    const rowMarker = [0, 4];
    _.each(data.boons.choices, (choice, choiceKey) => {
      if(_.contains(rowMarker, counter)) {
        row = addRowB(row);
      }
      if (row === 2) {
        $(`#section-B-D-div-boons-row-${row - 1}`).append($('<div>').addClass('choice').css({'width' : '50%'}).attr({'id' : `section-B-D-div-boons-${choiceKey}`}).html(choice.text));
      } else {
        $(`#section-B-D-div-boons-row-${row - 1}`).append($('<div>').addClass('choice').css({ 'width': '25%' }).attr({ 'id': `section-B-D-div-boons-${choiceKey}`}).html(choice.text));
      }
      counter++;
    });
  }
}

// helper function for adding rows to uneven tables//
function addRowB(rowNum) {
  $('#section-B-D-div-boons').append($('<div>').addClass('choices').attr({ 'id': `section-B-D-div-boons-row-${rowNum}` }));
  rowNum = rowNum + 1;
  return rowNum;
}