function rushPop() {
  cont = {
    pageHeader: 'Rush Fan Site Refactor',
    tools: `<div>Tools:&nbsp;&nbsp;&nbsp;Sass Partials,&nbsp;&nbsp;&nbsp;Custom CSS Properties,&nbsp;&nbsp;&nbsp;CSS Animation,&nbsp;&nbsp;&nbsp;JavaScript</div>`,
    subhead1: `Description: `,
    copy1: `A fan site of the Canadian rock trio Rush. This school project started out as an exploration of a color scheme I find interesting. After the fact I realized this is the same color scheme used on their <a class="album-pop" onmouseover="rushModal(event)" onmouseout="album.classList.add('hidden')">debut album.</a>`,
    subhead2: `Problem: `,
    copy2: `This was a school project which I completed in the first two
    weeks of class. The CSS I had written was excessively long
    and complicated. The code, in general needed considerable
    clean up: Comments written in a clearer fashion, proper
    indentation, image alt tags, explicit image sizes, semantic
    tags and hosting Google fonts on my server, to name a
    few.
    `,
    subhead3: `Strategy: `,
    copy3: `My first priority was to refactor all css, utilizing sass, into relevant partials organized into subfolders as shown in this <a class="p-a" href="#">diagram</a>. 
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
  $(`.quiz-bg`).removeClass(`sidebar-bg`);
  $(`.google-bg`).removeClass(`sidebar-bg`);
}

const album = document.querySelector('.album');

function rushModal(event) {
  console.log('rushModal');
  album.classList.remove('hidden');
  // let x = event.clientX + 20;
  // let y = event.clientY - 60;
  album.style.left = `${event.clientX + 20}px`;
  album.style.top = `${event.clientY - 60}px`;
}

// function rushModalhide() {
//   album.classList.add('hidden');
// }
