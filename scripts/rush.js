function rushPop() {
  cont = {
    pageHeader: 'Rush Fan Site Refactor',
    tools: `<div>Tools:&nbsp;&nbsp;&nbsp;Sass Partials,&nbsp;&nbsp;&nbsp;Custom CSS Properties,&nbsp;&nbsp;&nbsp;CSS Animation,&nbsp;&nbsp;&nbsp;JavaScript</div>`,
    subhead1: `Description: `,
    copy1: `A glorious fan site of the Canadian rock trio Rush. This project started out as an exploration of a color scheme I find interesting. After the fact I realized this is the same color scheme used on their <a class="p-a" href="#">debut album.</a>`,
    subhead2: `Problem: `,
    copy2: `This was a school project which I completed in the first two
    weeks of class. The CSS I had written was excessively long
    and complicated. The code, in general needed considerable
    clean up—comments written in a clearer fashion, proper
    indentation, image alt tags, explicit image sizes, semantic
    tags and hosting Google fonts on my server, to name a
    few.
    `,
    subhead3: `Strategy: `,
    copy3: `This was a school project which I completed in the first two
    weeks of class. The CSS I had written was excessively long
    and complicated. The code, in general needed some clean-up
    as far as clearly written comments, proper indentation and a
    range of best practices, scubas alt tags, explicit image
    sizes, accessibility to name a few. Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Rerum porro dolorem
    incidunt itaque tempora cupiditate beatae veniam maiores,
    commodi ducimus ullam ipsa alias? Officia in laborum,
    mollitia voluptas sint.
    `,
    subhead4: `Result: `,
    copy4: `Ipsum dolor sit amet consectetur adipisicing elit. Quae iste asperiores magni delectus omnis veritatis.
    `,
    pageLinks: `
     <a  href="https://napalmtango.github.io/-rush_2112minus89/"><img src="assets/images/open-web_12x12_333.png" >&nbsp;&nbsp;Live Page</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href="https://github.com/napalmtango/-rush_2112minus89" target="_blank"><img src="assets/images/github-mark_16x16.png" >&nbsp;&nbsp;GitHub</a>`,
    imgContainer: `<img src="./assets/images/rush-thumb_162x100.jpg"  width="186px" height="115px" />`,
  };

  $(`.rush-bg`).addClass(`sidebar-bg`);
  $(`.football-bg`).removeClass(`sidebar-bg`);
  $(`.silly-bg`).removeClass(`sidebar-bg`);
  $(`.sums-bg`).removeClass(`sidebar-bg`);
  $(`.color-bg`).removeClass(`sidebar-bg`);
}
