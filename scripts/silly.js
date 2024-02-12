function sillyPop() {
  cont = {
    pageHeader: 'Silly Personal Page',
    tools: `<div>Tools:&nbsp;&nbsp;&nbsp;Sass Partials,&nbsp;&nbsp;&nbsp;Custom CSS Properties,&nbsp;&nbsp;&nbsp;Animation,&nbsp;&nbsp;&nbsp;JavaScript</div>`,
    subhead1: `Description: `,
    copy1: `Largely an exercise in utilizing css animation effects. It also served as an outlet for exploring some of my favored subjects with a whimsical flavor.`,
    subhead2: `Problem: `,
    copy2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa modi quis blanditiis autem voluptatem! Doloremque, necessitatibus modi. Rerum porro dolorem
    incidunt itaque tempora cupiditate beatae veniam maiores,
    commodi ducimus ullam ipsa alias? Officia in laborum,
    mollitia voluptas sint.
    `,
    subhead3: `Strategy: `,
    copy3: `This was a school project which I completed in the first two
    weeks of class. The CSS I had written was excessively long
    and complicated.
    `,
    subhead4: `Result: `,
    copy4: `Ipsum dolor sit amet consectetur adipisicing elit. Rerum
    porro dolorem incidunt itaque tempora cupiditate beatae
    veniam maiores.
    `,
    pageLinks: `
     <a  href="#"><img src="assets/images/open-web_12x12_333.png" >&nbsp;&nbsp;Live Page</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href="https://github.com/napalmtango/-rush_2112minus89" target="_blank"><img src="assets/images/github-mark_16x16.png" >&nbsp;&nbsp;GitHub</a>`,
    imgContainer: `<img src="./assets/images/silly-thumb_162x100.jpg"  width="186px" height="115px" />`,
  };

  $(`.rush-bg`).removeClass(`sidebar-bg`);
  $(`.football-bg`).removeClass(`sidebar-bg`);
  $(`.silly-bg`).addClass(`sidebar-bg`);
  $(`.sums-bg`).removeClass(`sidebar-bg`);
  $(`.quiz-bg`).removeClass(`sidebar-bg`);
  $(`.google-bg`).removeClass(`sidebar-bg`);
}
