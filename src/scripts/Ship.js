function shipSectionFiller() {
  $.getJSON('src/data/json_for_index.json', function(data) {
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
          $('#section-Ship-div-shipStyles').append($('<div>').addClass('choices').attr({'id' : `section-Ship-div-shipStyles-row-${row}`}));
        }
        $(`#section-Ship-div-shipStyles-row-${row}`).append($('<div>').addClass('choice').css({ 'width': `33%` }).attr({ 'id': `#section-Ship-div-shipStyles-${choiceKey}`}).html(choice.text));
        counter++;
      });
    }
  });
}