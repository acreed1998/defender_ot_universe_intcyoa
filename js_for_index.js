$(document).ready(function () {
  const $navigationDiv = $("<div>").addClass('navigator').appendTo('body');
  $.getJSON('json_for_index.json', function (data) {
    console.log(data.misc_data.navbar);
    _.each(data.misc_data.navbar, function(header) {
      const $newSection = $('<div>').addClass('navButton').append($("<a>").text(header).click(function(){console.log(true)})).appendTo($navigationDiv);
    });
/*     // Opening Section Text
    let openingSection = $("<section>");
    openingSection.appendTo('body');
    let openingDialogue = $("<div>");
    openingDialogue.addClass('dialogue').html(data.opening).appendTo(openingSection);

    // Special Section
    let specialSection = $("<section>misc_data.navbarpp
    _.each(data.misc_data.navbar, functionendTo('body');
    let specialSectionOD = $("<div>").addClass('dialogue').html(data.special.opening).appendTo(specialSection);
    let specialSectionTable = $("<table>").addClass("choiceTable").appendTo(specialSection);
    let specialSectionTableRow = $('<tr>').appendTo(specialSectionTable);
    for (let key in data.special.choices) {
      let specialSectionTableCell = $('<td>').html(data.special.choices[key]).addClass('noChoice').appendTo(specialSectionTableRow);
    }

    // Race Section
    let raceSection = $("<section>").appendTo('body');
    let raceSectionOD = $("<div>").addClass('dialogue').html(data.race.opening).appendTo(raceSection);
    let raceSectionTable = $("<table>").addClass("choiceTable").appendTo(raceSection);
    let raceKeys = Object.keys(data.race.choices);
    for (let i = 0; i < raceKeys.length; i++) {
      if ((i) % 3 === 0 || i === 0) {
        var raceSectionTableRow = $("<tr>").appendTo(raceSectionTable);
      }
      let raceSectionTableCell = $("<td>").html(data.race.choices[raceKeys[i]].text).addClass('noChoice').appendTo(raceSectionTableRow);
    }

    // Abilities Section
    let abilitiesSection = $("<section>").appendTo('body');
    let abilitiesSectionOD = $("<div>").addClass('dialogue').html(data.abilities.opening).appendTo(abilitiesSection);
    let abilitiesSectionTable = $("<table>").addClass("abilityTable").appendTo(abilitiesSection);
    let abilityKeys = Object.keys(data.abilities.choices);
    for (let i = 0; i < abilityKeys.length; i++) {
      if (i % 4 === 0 || i === 0) {
        var abilitiesSectionTableRow = $("<tr>").appendTo(abilitiesSectionTable);
      }
      let abilitiesSectionTableCell = $("<td>").html(data.abilities.choices[abilityKeys[i]].text).addClass('noChoice').appendTo(abilitiesSectionTableRow);
    }

    // Armor Section
    let armorSection = $("<section>").appendTo('body');
    let armorSectionOD = $("<div>").addClass('dialogue').html(data.armor.opening).appendTo(armorSection);
    let armorSectionTable = $("<table>").addClass("armorTable").appendTo(armorSection);
    let armorSectionTableRow = $("<tr>").appendTo(armorSectionTable);
    let armorKeys = Object.keys(data.armor.choices);
    for (let i = 0; i < armorKeys.length; i++) {
      let armorSectionTableCell = $("<td>").html(data.armor.choices[armorKeys[i]].text).addClass('noChoice').appendTo(armorSectionTableRow);
    }

    // Armor Traits Section
    let aTraitsSection = $("<section>").appendTo('body');
    let aTraitsSectionOD = $("<div>").addClass('dialogue').html(data.armor_traits.opening).appendTo(armorSection);
    let aTraitsSectionTable = $("<table>").addClass("armorTraitsTable").appendTo(aTraitsSection);
    let aTraitsKeys = Object.keys(data.armor_traits.choices);
    for (let i = 0; i < aTraitsKeys.length; i++) {
      if (i % 4 === 0 || i === 0) {
        var aTraitsSectionTableRow = $("<tr>").appendTo(aTraitsSectionTable);
      }
      let aTraitsSectionTableCell = $("<td>").html(data.armor_traits.choices[aTraitsKeys[i]].text).addClass('noChoice').appendTo(aTraitsSectionTableRow);
    }

    // Weapons Section
    let weaponSection = $("<section>").appendTo('body');
    let weaponSectionOD = $("<div>").addClass('dialogue').html(data.weapons.opening).appendTo(weaponSection);
    let weaponSectionTable = $("<table>").addClass("weaponsTable").appendTo(weaponSection);
    let weaponsKeys = Object.keys(data.weapons.choices);
    for (let i = 0; i < weaponsKeys.length; i++) {
      if (i % 4 === 0 || i === 0) {
        var weaponSectionTableRow = $("<tr>").appendTo(weaponSectionTable);
      }
      let weaponSectionTableCell = $("<td>").html(data.weapons.choices[weaponsKeys[i]].text).addClass("noChoice").appendTo(weaponSectionTableRow);
    }

    // Ship Section
    let shipSection = $("<section>").appendTo('body');
    let shipSectionOD = $("<div>").addClass("dialogue").html(data.ship.opening).appendTo(shipSection);
    let shipSectionTable = $("<table>").addClass("shipTable").appendTo(shipSection);
    let shipSectionTableRow = $("<tr>").appendTo(shipSectionTable);
    let shipKeys = Object.keys(data.ship.choices);
    for (let i = 0; i < shipKeys.length; i++) {
      let shipSectionTableCell = $("<td>").html(data.ship.choices[shipKeys[i]].text).addClass("noChoice").appendTo(shipSectionTableRow);
    }

    // Ship Style Section
    let sStyleSection = $("<section>").appendTo("body");
    let sStyleSectionOD = $("<div>").addClass("dialogue").html(data.ship_style.opening).appendTo(sStyleSection);
    let sStyleSectionTable = $("<table>").addClass("shipStyleTable").appendTo(sStyleSection);
    let sStyleKeys = Object.keys(data.ship_style.choices);
    for (let i = 0; i < sStyleKeys.length; i++) {
      if (i % 3 === 0 || i === 0) {
        var sStyleSectionTableRow = $("<tr>").appendTo(sStyleSectionTable);
      }
      let sStyleSectionTableCell = $("<td>").html(data.ship_style.choices[sStyleKeys[i]].text).addClass("noChoice").appendTo(sStyleSectionTableRow);
    }

    // Ship Traits Section
    let sTraitSection = $("<section>").appendTo("body");
    let sTraitSectionOD = $("<div>").addClass("dialogue").html(data.ship_traits.opening).appendTo(sTraitSection);
    let sTraitSectionTable = $("<div>").addClass("shipTraitTable").appendTo(sTraitSection);
    let sTraitKeys = Object.keys(data.ship_traits.choices);
    for (let i = 0; i < sTraitKeys.length; i++) {
      if (i === 28 || i === 31) {
        var sTraitSectionTableRow = $("<div>").addClass("Gamma").appendTo(sTraitSectionTable);
      } else if (i === 34) {
        var sTraitSectionTableRow = $("<div>").appendTo(sTraitSectionTable);
      } else if (i % 4 === 0 || i < sTraitKeys.length - 10 && i % 4 === 0) {
        if (i !== 32 && i !== 33 && i !== 36) {
          var sTraitSectionTableRow = $("<div>").appendTo(sTraitSectionTable);
        }
      }
      let sStyleSectionTableCell = $("<div>").html(data.ship_traits.choices[sTraitKeys[i]].text).addClass("noChoice").appendTo(sTraitSectionTableRow);
    }

    // Non-Playable Races/Characters Section
    let npcSection = $("<section>").appendTo("body");
    let npcSectionOD = $("<div>").addClass("dialogue").html(data.non_playable_characters.opening).appendTo(npcSection);
    let npcSectionTable = $("<table>").addClass("npcTable").appendTo(npcSection);
    let npcKeys = Object.keys(data.non_playable_characters.choices);
    for (let i = 0; i < npcKeys.length; i++) {
      if (i % 3 === 0 || i === 0) {
        var npcSectionTableRow = $("<tr>").appendTo(npcSectionTable);
      }
      let npcSectionTableCell = $("<td>").html(data.non_playable_characters.choices[npcKeys[i]].text).addClass("noChoice").appendTo(npcSectionTableRow);
    }
    console.log(data.armor.opening); */
  });

});