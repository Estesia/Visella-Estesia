document.addEventListener("DOMContentLoaded", function () {
    // Animasi hover pada navigasi
    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#FFD700"; // Warna emas saat hover
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
});