// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Ensure target exists before scrolling
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky navigation bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = event.target.querySelector('input[type="text"]');
    const email = event.target.querySelector('input[type="email"]');
    const message = event.target.querySelector('textarea');

    // Trim inputs to avoid leading/trailing spaces affecting validation
    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Please enter a valid email address.');
    } else {
        alert(`Thank you, ${name.value.trim()}! Your message has been sent.`);
        // Optionally reset the form after successful submission
        event.target.reset();
    }
});

// Toggle Navbar (Hamburger Menu)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Auto-close the navbar when clicking a link
const navItems = document.querySelectorAll('.nav-links li a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});
