// =========================
// SMOOTH SCROLL
// =========================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// =========================
// SCROLL ANIMATION
// =========================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// =========================
// ACTIVE NAV LINK
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// =========================
// CALORIE CALCULATOR
// =========================
document.getElementById("calc-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;

    // Simple calorie formula (not medical grade)
    const calories = Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5);

    document.getElementById("result").textContent =
        "Estimated Daily Calories: " + calories;
});