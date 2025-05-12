// script.js
// Add event listener to hero button
document.querySelector('#hero button').addEventListener('click', () => {
    // Add animation to hero section
    document.querySelector('#hero').classList.add('animate');
    // Scroll to portfolio section
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to contact form
document.querySelector('#contact form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    // Validate form data
    if (name && email && message) {
        // Send form data to server
        console.log('Form submitted:', name, email, message);
    } else {
        console.log('Please fill out all fields.');
    }
});

// Add animation to portfolio items
document.querySelectorAll('.portfolio-item').forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('animate');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('animate');
    });
});