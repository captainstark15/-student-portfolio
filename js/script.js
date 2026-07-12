// Get the form
const contactForm = document.getElementById("contactForm");

// Check the form exists before adding the event listener
if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const message = document.getElementById("message").value.trim();

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
        /^[0-9]+$/;

        if(name=="" || email=="" || phone=="" || message==""){

            alert("Please fill in all fields.");

            return;

        }

        if(!emailPattern.test(email)){

            alert("Please enter a valid email address.");

            return;

        }

        if(!phonePattern.test(phone)){

            alert("Phone number must contain only digits.");

            return;

        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

themeToggle.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

});

}
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

    greeting.innerHTML = `${message}, ${visitor}!<br>I'm Abdulbasit Abdulkadir Alakoso`;
}