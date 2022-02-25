const URL = 'http://localhost:3000/posts';
console.log('single');

const params = new URLSearchParams(window.location.search);

const postId = params.get('postId');

console.log(postId); // "sai"

async function getSinglePost(id) {
  // fetch get single post from back end
  const resp = await fetch(URL + '/' + id);
  const [jsData] = await resp.json();
  console.log('getSinglePost ===', jsData);
  // get commentsByPosId
}

getSinglePost(postId);
