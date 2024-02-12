function footballPop() {
  cont = {
    pageHeader: 'Football Season Simulator',
    tools: `<div>Tools:&nbsp;&nbsp;&nbsp;Multi-Dimensional Arrays,&nbsp;&nbsp;&nbsp;Dynamic Data Structures,&nbsp;&nbsp;&nbsp;jQuery</div>`,
    subhead1: `Description: `,
    copy1: `An app which simulates a football season. It randomly generates scores for each weeks schedule of games, updates and sorts standings.`,
    subhead2: `Problem: `,
    copy2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa modi quis blanditiis autem voluptatem! Doloremque, necessitatibus modi.
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
    `,
    subhead4: `Result: `,
    copy4: `Ipsum dolor sit amet consectetur adipisicing elit. Rerum
    porro dolorem incidunt itaque tempora cupiditate beatae
    veniam maiores.
    `,
    pageLinks: `
     <a  href="#"><img src="assets/images/open-web_12x12_333.png" >&nbsp;&nbsp;Live Page</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href="https://github.com/napalmtango/-rush_2112minus89" target="_blank"><img src="assets/images/github-mark_16x16.png" >&nbsp;&nbsp;GitHub</a>`,
    imgContainer: `<img src="./assets/images/nfl-thumb_186x115.jpg"  width="186px" height="115px" />`,
  };

  $(`.rush-bg`).removeClass(`sidebar-bg`);
  $(`.football-bg`).addClass(`sidebar-bg`);
  $(`.silly-bg`).removeClass(`sidebar-bg`);
  $(`.sums-bg`).removeClass(`sidebar-bg`);
  $(`.quiz-bg`).removeClass(`sidebar-bg`);
  $(`.google-bg`).removeClass(`sidebar-bg`);
}
