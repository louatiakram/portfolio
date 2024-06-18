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

