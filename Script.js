// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Toggle full blog post visibility
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            let fullView = this.nextElementSibling;
            fullView.style.display = fullView.style.display === "block" ? "none" : "block";
            this.textContent = fullView.style.display === "block" ? "Read Less" : "Read More";
        });
    });

    // Like button click event
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("liked");
        });
    });

    // Bookmark button click event
    document.querySelectorAll(".bookmark-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("bookmarked");
        });
    });
});