const videos = document.querySelectorAll(".video-bg");
let current = 0;

setInterval(() => {
    videos[current].classList.remove("active");
    current = (current + 1) % videos.length;
    videos[current].classList.add("active");
}, 8000);




document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section-video");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.3 } // Quanto da section deve aparecer para animar
    );

    sections.forEach(sec => observer.observe(sec));
});
