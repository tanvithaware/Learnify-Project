
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const courseCards = document.querySelectorAll(".course-card");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

// Course Search
function searchCourses() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    courseCards.forEach(function(card) {
        const courseName = card.dataset.name.toLowerCase();
        const courseTitle = card.querySelector("h3")
            .textContent.toLowerCase();

        const matches =
            courseName.includes(query) ||
            courseTitle.includes(query);

        card.hidden = !matches;

        if (matches) {
            visibleCount++;
        }
    });

    resultCount.textContent =
        visibleCount + (visibleCount === 1
            ? " course found"
            : " courses found");

    noResults.hidden = visibleCount !== 0;
}

searchBtn.addEventListener("click", searchCourses);

searchInput.addEventListener("input", searchCourses);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchCourses();
    }
});

searchCourses();

// Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark ? "☀️" : "🌙";
    themeBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
});

// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");

    menuBtn.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// Enrollment Interaction
document.querySelectorAll(".enroll-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        const courseName = button.dataset.course;

        alert(
            "Thank you for your interest in " + courseName +
            "!\n\nEnrollment functionality can be added in a future version."
        );
    });
});

// Contact Form Validation and Demo Submission
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("userName")
        .value.trim();

    if (!name) {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your demo message has been received.";

    contactForm.reset();
});
