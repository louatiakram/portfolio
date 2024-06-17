document.addEventListener('DOMContentLoaded', function() {
    // Typing effect logic
    const phrases = ["Game Developer.", "Web Developer."];
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
