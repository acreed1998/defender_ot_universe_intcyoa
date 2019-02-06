function shipSectionFiller() {
  $.getJSON('src/data/json_for_index.json', function(data) {
    if($('#section-Ship').length !== 0) {
      //Populate the Ship (Type) Section//
      $("#section-Ship").append($('<div>').addClass('openingText').attr({'id' : 'section-Ship-div-ship-opening'}).html(data.ship.opening));
      $("#section-Ship").append($('<div>').addClass('choices').attr({'id' : 'section-Ship-div-ship'}));
      _.each(data.ship.choices, function(choice, choiceKey) {
        $('#section-Ship-div-ship').append($('<div>').addClass('choice').css({'width' : '25%'}).attr({'id' : `section-Ship-div-ship-${choiceKey}`}).html(choice.text));
      });
    }
  });
}