// Add smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle the Donate button click
document.getElementById('donate-button').addEventListener('click', () => {
    alert('Thank you for your interest in donating!');
});

// Volunteer form validation
document.getElementById('volunteer-form').addEventListener('submit', event => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple form validation
    if (!name || !mobile || !email || !message || !password) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[\d]{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes
    alert('Thank you for signing up as a volunteer! We will contact you soon.');

    // Optionally, clear the form
    document.getElementById('volunteer-form').reset();
});
