// ===============================
// Contact Form Validation
// ===============================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]+$/;
        if (!name || !email || !phone || !message) {
            alert("Please fill in all fields.");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!phonePattern.test(phone)) {
            alert("Phone number must contain only digits.");
            return;
        }
        alert("Message sent successfully!");
        contactForm.reset();
    });
}

// ===============================
// Dark Mode with Local Storage
// ===============================
const themeToggle = document.getElementById("themeToggle");
// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// ===============================
// Dynamic Greeting
// ===============================
const greeting = document.getElementById("greeting");
if (greeting) {
    const hour = new Date().getHours();
    let message = "";
    if (hour >= 5 && hour < 12) {
        message = "☀️ Good Morning";
    } else if (hour >= 12 && hour < 17) {
        message = "🌤️ Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        message = "🌇 Good Evening";
    } else {
        message = "🌙 Good Night";
    }
    greeting.innerHTML = `${message}, I'm Abdulbasit Abdulkadir Alakoso`;
}

// ===============================
// Scroll to Top Button
// ===============================
const topBtn = document.getElementById("topBtn");
if (topBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });
    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });
}