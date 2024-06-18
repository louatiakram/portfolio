//script.js

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect logic
    const phrases = ["Game Developer", "Web Developer"];
    let textIndex = 0;
    let isDeleting = false;
    let typingText = '';
    const typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[textIndex];
        let nextIndex = typingText.length + (isDeleting ? -1 : 1);

        if (!isDeleting) {
            // Typing phase
            if (nextIndex <= currentPhrase.length) {
                typingText = currentPhrase.substring(0, nextIndex);
            } else {
                isDeleting = true;
            }
        } else {
            // Deleting phase
            if (nextIndex >= 0) {
                typingText = currentPhrase.substring(0, nextIndex);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % phrases.length;
            }
        }

        document.getElementById('typingText').textContent = typingText;
        setTimeout(type, typingSpeed);
    }

    type();

    // Update footer year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Function to send email using EmailJS
function sendEmail() {
    // Prevent the form from submitting normally
    event.preventDefault();
    
    // Fetch form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    // Prepare email parameters
    let params = {
        from_name: name,
        from_email: email,  // Set the sender's email address in the "From" field
        reply_to: email,    // Set the sender's email address in the "Reply-To" field
        message: message,
        to_name: 'Akram'    // Replace with recipient's name
    };
    
    // Send email using EmailJS
    emailjs.send('service_20zxqun', 'template_h7wwvgr', params)
        .then(function(response) {
            console.log('Email sent:', response);
            alert('Your message has been sent successfully!');
            // Clear form fields after successful submission
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error('Email send failed:', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
    
    return false;  // To avoid actual form submission
}

// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let cardWidth, cardHeight, centerX, centerY;
        
        const updateTransform = (mouseX, mouseY) => {
            const maxRotate = 15; // Max rotation angle in degrees
            const rotateX = ((centerY - mouseY) / centerY) * maxRotate;
            const rotateY = ((mouseX - centerX) / centerX) * maxRotate;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const onMouseMove = (e) => {
            if (!cardWidth || !cardHeight) {
                const rect = card.getBoundingClientRect();
                cardWidth = rect.width;
                cardHeight = rect.height;
                centerX = cardWidth / 2;
                centerY = cardHeight / 2;
            }

            const mouseX = e.clientX - card.getBoundingClientRect().left;
            const mouseY = e.clientY - card.getBoundingClientRect().top;

            requestAnimationFrame(() => updateTransform(mouseX, mouseY));
        };

        const onMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            cardWidth = cardHeight = centerX = centerY = null; // Reset values
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
    });
});

// script.js or within a <script> tag in HTML

document.querySelectorAll('.floating-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// script.js or within a <script> tag in HTML

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const themeToggle = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggle.checked = true;
        saveThemePreference('dark');
    } else {
        themeToggle.checked = false;
        saveThemePreference('light');
    }
}

// Function to save theme preference to local storage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Check if user has a preference and set initial theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const savedHideState = localStorage.getItem('hideToggleState');
    
    // Restore theme
    if (savedTheme === 'dark') {
        toggleTheme();  // This function should already toggle the theme based on savedTheme
    }
    
    // Restore hide toggle state
    if (savedHideState === 'hidden') {
        toggleHide();  // This function should toggle the hide state based on savedHideState
    }
    
    // Update hide toggle switch state
    const hideToggle = document.getElementById('hide-toggle');
    if (savedHideState === 'hidden') {
        hideToggle.checked = true;
    } else {
        hideToggle.checked = false;
    }
});




// Function to toggle hide
function toggleHide() {
    var navList = document.querySelector('.floating-navbar ul');
    if (navList) {
        navList.classList.toggle('hidden');

        // Save state to localStorage
        if (navList.classList.contains('hidden')) {
            localStorage.setItem('hideToggleState', 'hidden');
        } else {
            localStorage.setItem('hideToggleState', 'visible');
        }
    }
}


