function sillyPop() {
  $(`#page-header`).html(`Silly Personal Page`);
  $(`#tools`).html(`
  <div>Sass Partials</div>
  <div>Custom CSS Properties</div>
  <div>Animation</div>
  <div>JavaScript</div>`);

  $(`#subhead1`).html(`
  Description`);
  $(`#copy1`).html(`
  Largely an exercise in utilizing css animation effects. It also served as an outlet for exploring some of my favored subjects with a whimsical flavor.</a>
  `);

  $(`#subhead2`).html(`
  Problem`);
  $(`#copy2`).html(`
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa modi quis blanditiis autem voluptatem! Doloremque, necessitatibus modi. Rerum porro dolorem
  incidunt itaque tempora cupiditate beatae veniam maiores,
  commodi ducimus ullam ipsa alias? Officia in laborum,
  mollitia voluptas sint.</a>
  `);

  $(`#subhead3`).html(`
  Strategy`);
  $(`#copy3`).html(`
  This was a school project which I completed in the first two
  weeks of class. The CSS I had written was excessively long
  and complicated. </a>
  `);

  $(`#subhead4`).html(`
  Result`);
  $(`#copy4`).html(`
    Ipsum dolor sit amet consectetur adipisicing elit. Rerum
    porro dolorem incidunt itaque tempora cupiditate beatae
    veniam maiores.</a>
  `);
  $(`#img-container`).html(
    `<img src="./assets/images/silly-thumb_162x100.jpg"  width="186px" height="115px" />`
  );

  $(`.rush-bg`).removeClass(`sidebar-bg`);
  $(`.football-bg`).removeClass(`sidebar-bg`);
  $(`.silly-bg`).addClass(`sidebar-bg`);
  $(`.sums-bg`).removeClass(`sidebar-bg`);
  $(`.color-bg`).removeClass(`sidebar-bg`);
}
