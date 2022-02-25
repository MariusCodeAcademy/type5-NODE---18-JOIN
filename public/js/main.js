const URL = 'http://localhost:3000/posts';
const postContainerEl = document.querySelector('.posts-grid');

async function getPosts() {
  const resp = await fetch(URL);
  const jsData = await resp.json();
  console.log('jsData ===', jsData);
  renderPosts(jsData, postContainerEl);
}

function renderPosts(postsArr, dest) {}

getPosts();
