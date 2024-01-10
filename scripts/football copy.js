function footballPop() {
  $(`#page-header`).html(`Football Season Simulator`);
  $(`#tools`).html(`
<div>Multi-Dimensional Arrays</div>
<div>Dynamic Data Structures</div>
<div>jQuery</div>`);

  $(`#subhead1`).html(`
Description`);
  $(`#copy1`).html(`
An app which simulates a football season. It randomly generates scores for each weeks schedule of games, updates and sorts standings.</a>
`);

  $(`#subhead2`).html(`
Problem`);
  $(`#copy2`).html(`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa modi quis blanditiis autem voluptatem! Doloremque, necessitatibus modi.</a>
`);

  $(`#subhead3`).html(`
Strategy`);
  $(`#copy3`).html(`
This was a school project which I completed in the first two
weeks of class. The CSS I had written was excessively long
and complicated. The code, in general needed some clean-up
as far as clearly written comments, proper indentation and a
range of best practices, scubas alt tags, explicit image
sizes, accessibility to name a few. Lorem ipsum dolor sit
amet consectetur adipisicing elit. Rerum porro dolorem
incidunt itaque tempora cupiditate beatae veniam maiores,
commodi ducimus ullam ipsa alias? Officia in laborum,
mollitia voluptas sint.</a>
`);

  $(`#subhead4`).html(`
Result`);
  $(`#copy4`).html(`
  Ipsum dolor sit amet consectetur adipisicing elit. Rerum
  porro dolorem incidunt itaque tempora cupiditate beatae
  veniam maiores.</a>
`);
  $(`.page-links`).html(
    `<a href="#"><img src="assets/images/open-web_333.png" display="baseline" height="12px" width="12px">&nbsp;&nbsp;Live Page</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><img src="assets/images/github-mark_333.png" display="baseline" height="16px" width="16px">&nbsp;&nbsp;GitHub</a>`
  );
  $(`#img-container`).html(
    `<img src="./assets/images/nfl-thumb_186x115.jpg"  width="186px" height="115px" />`
  );

  $(`.rush-bg`).removeClass(`sidebar-bg`);
  $(`.football-bg`).addClass(`sidebar-bg`);
  $(`.silly-bg`).removeClass(`sidebar-bg`);
  $(`.sums-bg`).removeClass(`sidebar-bg`);
  $(`.color-bg`).removeClass(`sidebar-bg`);
}
