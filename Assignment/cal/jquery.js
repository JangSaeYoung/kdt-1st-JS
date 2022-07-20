let target;
let currentTarget;

$('td').on('click', function (e) {
  target = e.target;
  currentTarget = e.currentTarget;

  $('#date').val($(currentTarget).text());
});

//첫번째
// function writeSchedule() {
//   let task = $('#content').val();

//   $(currentTarget).append(`<div>${task}</div>`);

//   $('#date').val('');
//   $('#content').val('');
// }

//두번째
// $('td').on('click', function (e) {
//   target = e.target;
//   currentTarget = e.currentTarget;
//   if ($(target).prop('tagName') === 'DIV') {
//     $(target).remove();
//   } else {
//     $('#date'.val($(currentTarget).text()));
//   }
// });
