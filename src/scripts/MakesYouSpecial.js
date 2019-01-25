function makesYouSpecial() {
  $.getJSON('/src/data/json_for_index.json', function(data) {
    if ($('#section-You').length !== 0) {
      $('#section-You').append($('<div>').addClass('openingText').attr({ "id": "section-You-div-special-opening" }).html(data.special.opening));
      _.each(data.special.choices, function(choice){
        
      });
    }
  })
}
