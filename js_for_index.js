$(document).ready(function () {
  $.getJSON('json_for_index.json', function (data) {
    console.log(data.abilities.choices);
    for (let key in data.abilities.choices) {
      let openingtext = $("<div>");
      openingtext.html(data.abilities.choices[key].text);
      $('body').append(openingtext);
    }
  });
});