document.addEventListener("DOMContentLoaded", function() {
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

    // Slider untuk daftar novel
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".novel");
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
    }
    showSlides();
});