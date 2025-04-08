// script.js


//here is firebase code
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABNCC6L7Tcdy1N4P10TEVvFQSEkYq5wQE",
    authDomain: "blog-website-df667.firebaseapp.com",
    projectId: "blog-website-df667",
    storageBucket: "blog-website-df667.firebasestorage.app",
    messagingSenderId: "604952664067",
    appId: "1:604952664067:web:a8512bc34710d97792d636",
    measurementId: "G-LTFQ0TGDRJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
//end

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
