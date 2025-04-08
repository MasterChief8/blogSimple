// script.js

// Load posts from localStorage
function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  posts.reverse().forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<strong>${post.author}</strong><p>${post.content}</p>`;
    postsContainer.appendChild(postDiv);
  });
}

// Save post to localStorage
function savePost(author, content) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({ author, content });
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

// Handle form submit
const form = document.getElementById('postForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const author = document.getElementById('author').value.trim();
  const content = document.getElementById('content').value.trim();
  if (author && content) {
    savePost(author, content);
    form.reset();
  }
});

// Initialize
loadPosts();
