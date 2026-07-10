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