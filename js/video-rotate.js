const videos = document.querySelectorAll(".video-bg");
let current = 0;

setInterval(() => {
    videos[current].classList.remove("active");
    current = (current + 1) % videos.length;
    videos[current].classList.add("active");
}, 8000);
