$(document).ready(function () {
  console.log(true);
  $.getJSON('json_for_index.json', function (data) {
    console.log(data.opening);
    let openingtext = $("<div>");
    openingtext.html(data.race.choices.gray.text);
    $('body').append(openingtext);
  });
});