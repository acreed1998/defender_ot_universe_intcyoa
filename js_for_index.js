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
    for (let key in data.abilities.choices) {
      let openingtext = $("<div>");
      openingtext.html(data.abilities.choices[key].text);
      $('body').append(openingtext);
    }
  });

});