const URL = 'http://localhost:3000/posts';
const URL_C = 'http://localhost:3000/categories';

const postContainerEl = document.querySelector('.posts-grid');
const categoriesEl = document.getElementById('cat');

// console.log('postContainerEl ===', postContainerEl);

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

async function getCategories() {
  const resp = await fetch(URL_C);
  const dataFromServerInJSFormat = await resp.json();
  console.log('dataFromServerInJSFormat ===', dataFromServerInJSFormat);
  renderCats(dataFromServerInJSFormat, categoriesEl);
}

async function filterPostByCatId(catId) {
  console.log('i am filtering by id ', catId);
}

function renderCats(catsArr, dest) {
  catsArr.map((cat) => {
    const btnEl = document.createElement('button');
    btnEl.textContent = cat.name;
    btnEl.addEventListener('click', () => filterPostByCatId(cat.category_id));
    dest.append(btnEl);
  });
}

getPosts();
getCategories();

const catsArr = [
  {
    category_id: 1,
    name: 'Technology',
    created_at: '2022-02-23T22:00:00.000Z',
  },
  { category_id: 2, name: 'Art', created_at: '2022-02-23T22:00:00.000Z' },
  { category_id: 3, name: 'Business', created_at: '2022-02-23T22:00:00.000Z' },
  { category_id: 4, name: 'Sport', created_at: '2022-02-24T22:00:00.000Z' },
  { category_id: 5, name: 'Nature', created_at: '2022-02-24T22:00:00.000Z' },
  { category_id: 6, name: 'Cars', created_at: '2022-02-28T13:52:40.000Z' },
];
