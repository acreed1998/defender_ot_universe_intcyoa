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
    

    for (let key in data.abilities.choices) {
      let openingtext = $("<div>");
      openingtext.html(data.abilities.choices[key].text);
      $('body').append(openingtext);
    }
  });

});