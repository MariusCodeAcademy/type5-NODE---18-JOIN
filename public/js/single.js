const URL = 'http://localhost:3000';
console.log('single');

const params = new URLSearchParams(window.location.search);
const postId = params.get('postId');

const h1El = document.getElementById('main-title');
const commEl = document.querySelector('.posts-grid');

// console.log(postId); // "sai"

async function getSinglePost(id) {
  // fetch get single post from back end
  const resp = await fetch(`${URL}/posts/${id}`);
  const [jsData] = await resp.json();
  console.log('getSinglePost ===', jsData);
  commentsByPosId(id);
  renderSinglePost(jsData, h1El);
}

getSinglePost(postId);

function renderSinglePost(postObj, dest) {
  const postHtml = `
  <article class="one-post">
    <h2 class="title">${postObj.title}</h2>
    <p><i>${postObj.category}</i></p>
    <p class="post-intro">${postObj.body}</p>
    <a href="/public">Go back</a>
  </article>
  `;
  dest.insertAdjacentHTML('afterend', postHtml);
}

async function commentsByPosId(id) {
  const resp = await fetch(`${URL}/comments/byPost/${id}`);
  const jsData = await resp.json();
  console.log('Comments ===', jsData);
  renderComments(jsData, commEl);
}

function renderComments(commArr, dest) {
  if (!commArr.length) return;
  commArr.forEach((commObj) => {
    dest.insertAdjacentHTML(
      'beforeend',
      `
      <article>
        <h3>${commObj.author}</h3>
        <p>${commObj.body}</p>
      </article>
    `,
    );
  });
}
