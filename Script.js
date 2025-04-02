{{javascript}}
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const post = this.closest('.blog-post');
        const fullView = post.querySelector('.full-view');
        fullView.classList.toggle('active'); // Toggle visibility of the full content
        this.textContent = fullView.classList.contains('active') ? 'Read Less' : 'Read More';
    });
});

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        const post = this.closest('.blog-post');
        const postId = post.getAttribute('data-post-id');
        const isLiked = localStorage.getItem(`like-${postId}`);

        if (isLiked) {
            localStorage.removeItem(`like-${postId}`);
            this.classList.remove('liked');
        } else {
            localStorage.setItem(`like-${postId}`, 'true');
            this.classList.add('liked');
        }