function armorWeaponsSectionFiller() {
  $.getJSON('src/data/json_for_index.json', function(data) {
    if ($('#section-Armor---Weapons').length !== 0) {
      // Populate the armor opening //
      $('#section-Armor---Weapons').append($('<div>').addClass('openingText').attr({'id' : 'section-ArmorWeapons-div-armor-opening'}).html(data.armor.opening));
      $('#section-Armor---Weapons').append($('<div>').addClass('choices').attr({ 'id': 'section-ArmorWeapons-div-armor'}));
      _.each(data.armor.choices, function(choice, choiceKey){
        $('#section-ArmorWeapons-div-armor').append($('<div>').addClass('choice').css({ 'width': '33%' }).attr({ 'id': `section-ArmorWeapons-div-armor-${choiceKey}`}).html(choice.text));
      });

      // Populate the armor traits section //
      $('#section-Armor---Weapons').append($('<div>').addClass('openingText').attr({ 'id': 'section-ArmorWeapons-div-armorTraits-opening'}).html(data.armor_traits.opening));
      $('#section-Armor---Weapons').append($('<div>').addClass('choicesHolder').attr({ 'id': 'section-ArmorWeapons-div-armorTraits'}));
      let counter = 0;
      let row = 0;
      _.each(data.armor_traits.choices, (choice, choiceKey) => {
        if (counter % 4 === 0) {
          row++;
          $(`#section-ArmorWeapons-div-armorTraits`).append($('<div>').addClass('choices').attr({'id' : `section-ArmorWeapons-div-armorTraits-row-${row}`}));
        }
        $(`#section-ArmorWeapons-div-armorTraits-row-${row}`).append($('<div>').addClass('choice').css({ 'width': '25%' }).attr({ 'id': `section-ArmorWeapons-div-armorTraits-${choiceKey}`}).html(choice.text));
        counter++;
      });

      // Populate the weapons section //
      $('#section-Armor---Weapons').append($('<div>').addClass('openingText').attr({ 'id': 'section-ArmorWeapons-div-weapons-opening'}).html(data.weapons.opening));
      $('#section-Armor---Weapons').append($('<div>').addClass('choicesHolder').attr({ 'id': 'section-ArmorWeapons-div-weapons'}));
      counter = 0;
      row = 0;
      _.each(data.weapons.choices, (choice, choiceKey) => {
        if (counter % 4 === 0) {
          row++;
          $('#section-ArmorWeapons-div-weapons').append($('<div>').addClass('choices').attr({'id' : `section-ArmorWeapons-div-weapons-row-${row}`}));
        }
        $(`#section-ArmorWeapons-div-weapons-row-${row}`).append($('<div>').addClass('choice').css({ 'width': '25%' }).attr({ 'id': `section-ArmorWeapons-div-weapons-${choiceKey}`}).html(choice.text));
        counter++;
      });
    }

    
  });
}