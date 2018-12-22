$(document).ready(function () {
  console.log(true);
  $.getJSON('json_for_index.json', function (data) {
    console.log(data.opening);
    let openingtext = $("<div>");
    openingtext.html(data.abilities.choices.special_ops.text);
    $('body').append(openingtext);
  });
});