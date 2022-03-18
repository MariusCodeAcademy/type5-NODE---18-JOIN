const URL = 'http://localhost:3000/posts';
console.log('single');

const params = new URLSearchParams(window.location.search);
const postId = params.get('postId');

const h1El = document.getElementById('main-title');

// console.log(postId); // "sai"

async function getSinglePost(id) {
  // fetch get single post from back end
  const resp = await fetch(`${URL}/${id}`);
  const [jsData] = await resp.json();
  console.log('getSinglePost ===', jsData);
  // get commentsByPosId
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
