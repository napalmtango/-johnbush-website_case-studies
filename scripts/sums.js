function sumsPop() {
  cont = {
    pageHeader: 'Sums and Nums',
    tools: `<div>Tools:&nbsp;&nbsp;&nbsp;React,&nbsp;&nbsp;&nbsp;Use State,&nbsp;&nbsp;&nbsp;JavaScript</div>`,
    subhead1: `Description: `,
    copy1: `Ipsum dolor sit amet consectetur adipisicing elit. Quae iste asperiores magni delectus omnis veritatis. `,
    subhead2: `Problem: `,
    copy2: `This was a school project which I completed in the first two
    weeks of class. The CSS I had written was excessively long
    and complicated.
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
    copy4: `Ipsum dolor sit amet consectetur adipisicing elit.
    `,
    pageLinks: `
     <a  href="#"><img src="assets/images/open-web_12x12_333.png" >&nbsp;&nbsp;Live Page</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a  href="https://github.com/napalmtango/-rush_2112minus89" target="_blank"><img src="assets/images/github-mark_16x16.png" >&nbsp;&nbsp;GitHub</a>`,
    imgContainer: `<img src="./assets/images/sums-thumb_162x100.jpg"  width="186px" height="115px" />`,
  };

  $(`.rush-bg`).removeClass(`sidebar-bg`);
  $(`.football-bg`).removeClass(`sidebar-bg`);
  $(`.silly-bg`).removeClass(`sidebar-bg`);
  $(`.sums-bg`).addClass(`sidebar-bg`);
  $(`.color-bg`).removeClass(`sidebar-bg`);
}
