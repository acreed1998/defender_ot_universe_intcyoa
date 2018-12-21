$(document).ready(function () {
  console.log(true);
  $.getJSON('json_for_index.json', function (data) {
    console.log(data);
  });
});