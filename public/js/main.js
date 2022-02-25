const URL = 'http://localhost:3000/posts';
const postContainerEl = document.querySelector('.posts-grid');
console.log('postContainerEl ===', postContainerEl);
async function getPosts() {
  const resp = await fetch(URL);
  const jsData = await resp.json();
  console.log('jsData ===', jsData);
  renderPosts(jsData, postContainerEl);
}

function renderPosts(postsArr, dest) {
  dest.innerHTML = '';
  console.log('renderPosts ===');
  postsArr.forEach(({ post_id, title, category, body }) => {
    dest.innerHTML += `
    <article class="one-post">
        <h2 class="title">${title}</h2>
        <p>category: <i>${category}</i></p>
        <p class="post-intro">${body}</p>
        <a href="singlePost.html?postId=${post_id}">View more</a>
      </article>
    `;
  });
}

getPosts();
