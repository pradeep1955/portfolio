// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
