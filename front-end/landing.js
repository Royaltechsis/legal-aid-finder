// Javascript for responsive navigation menu
const navbar = document.getElementById("navbar");

// Javascript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// JavaScript for image slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".background");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// JavaScript for button click events
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Button clicked!");
    });
});
