$(document).ready(function () {
  $.getJSON('json_for_index.json', function (data) {
    // Opening Section Text
    let openingSection = $("<section>");
    openingSection.appendTo('body');
    let openingDialogue = $("<div>");
    openingDialogue.addClass('dialogue').html(data.opening).appendTo(openingSection);

    // Special Section
    let specialSection = $("<section>").appendTo('body');
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
    console.log(data.armor.opening);
  });

});