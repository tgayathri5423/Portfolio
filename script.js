document.addEventListener('DOMContentLoaded', function () {
    // Typing animation
    const roles = ["Sr. Python Developer", "Data Engineer", "Cloud Solutions Expert"];
    let i = 0, j = 0, current = "", isDeleting = false;
    const el = document.getElementById("typing-text");

    function type() {
        current = roles[i];
        el.textContent = current.substring(0, j);
        if (!isDeleting && j++ === current.length) { isDeleting = true; setTimeout(type, 1200); return }
        if (isDeleting && j-- === 0) { isDeleting = false; i = (i + 1) % roles.length }
        setTimeout(type, isDeleting ? 60 : 120);
    }
    type();

    // Footer year
    document.getElementById("year").textContent = new Date().getFullYear();
});
