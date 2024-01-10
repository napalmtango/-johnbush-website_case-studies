function rushPop() {
  content = [
    `Rush Fan Site Refactor`,
    `<div>Sass Partials</div>
    <div>Custom CSS Properties</div>
    <div>CSS Animation</div>
    <div>JavaScript</div>`,
    `Description: `,
    `A fan site of the Canadian rock trio Rush. This project started out as an exploration of a color scheme I find interesting. After the fact I realized this is the same color scheme used on their <a class="p-a" href="#">debut album.</a>`,
    `Problem: `,
    `This was a school project which I completed in the first two
    weeks of class. The CSS I had written was excessively long
    and complicated. The code, in general needed considerable
    clean up—comments written in a clearer fashion, proper
    indentation, image alt tags, explicit image sizes, semantic
    tags and hosting Google fonts on my server, to name a
    few.`,
    `Strategy: `,
    `This was a school project which I completed in the first two
    weeks of class. The CSS I had written was excessively long
    and complicated. The code, in general needed some clean-up
    as far as clearly written comments, proper indentation and a
    range of best practices, scubas alt tags, explicit image
    sizes, accessibility to name a few. Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Rerum porro dolorem
    incidunt itaque tempora cupiditate beatae veniam maiores,
    commodi ducimus ullam ipsa alias? Officia in laborum,
    mollitia voluptas sint.`,
    `Result: `,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste asperiores magni delectus omnis veritatis?`,
    `<img src="./assets/images/rush-thumb_162x100.jpg"  width="186px" height="115px" />`,
  ];

  $(`#page-header`).html(content[0]);
  $(`#tools`).html(content[1]);

  $(`#subhead1`).html(content[2]);
  $(`#copy1`).html(content[3]);

  $(`#subhead2`).html(content[4]);
  $(`#copy2`).html(content[5]);

  $(`#subhead3`).html(content[6]);
  $(`#copy3`).html(content[7]);

  $(`#subhead4`).html(content[8]);
  $(`#copy4`).html(content[9]);

  $(`#img-container`).html(content[10]);

  $(`.rush-bg`).addClass(`sidebar-bg`);
  $(`.football-bg`).removeClass(`sidebar-bg`);
  $(`.silly-bg`).removeClass(`sidebar-bg`);
  $(`.sums-bg`).removeClass(`sidebar-bg`);
  $(`.color-bg`).removeClass(`sidebar-bg`);
}
