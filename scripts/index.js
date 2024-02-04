console.log('//External script file being read from scripts/script.js');

let cont = {};

$('.rush-open-js').click(function () {
  modal();
  rushPop();
  modalContent();
});

$('.football-open-js').click(function () {
  modal();
  footballPop();
  modalContent();
});

$('.silly-open-js').click(function () {
  modal();
  sillyPop();
  modalContent();
});

$('.sums-open-js').click(function () {
  modal();
  sumsPop();
  modalContent();
});

$('.color-open-js').click(function () {
  modal();
  colorPop();
  modalContent();
});

$('#close').click(function () {
  console.log('Modal close button clicked');
  $('.modal').removeClass('active');
});

function modal() {
  console.log('Modal button clicked');
  $('.modal').addClass('active');
}

function modalContent() {
  $(`#page-header`).html(cont.pageHeader);
  $(`#tools`).html(cont.tools);

  $(`#subhead1`).html(cont.subhead1);
  $(`#copy1`).html(cont.copy1);

  $(`#subhead2`).html(cont.subhead2);
  $(`#copy2`).html(cont.copy2);

  $(`#subhead3`).html(cont.subhead3);
  $(`#copy3`).html(cont.copy3);

  $(`#subhead4`).html(cont.subhead4);
  $(`#copy4`).html(cont.copy4);

  $(`.page-links`).html(cont.pageLinks);
  $(`#img-container`).html(cont.imgContainer);
}
