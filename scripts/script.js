console.log('//External script file being read from scripts/script.js');

$('#open').click(function () {
  console.log('Modal button clicked');
  $('.modal').addClass('active');
});

$('#close').click(function () {
  console.log('Modal close button clicked');
  $('.modal').removeClass('active');
});
