// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.querySelector('.booking-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form data
    const data = {
        name: this.querySelector('input[placeholder="Your Name"]').value,
        email: this.querySelector('input[placeholder="Your Email"]').value,
        phone: this.querySelector('input[placeholder="Your Phone Number"]').value,
        message: this.querySelector('textarea').value
    };
    
    // Display confirmation message
    alert(`Thank you, ${data.name}! We've received your consultation request. We'll contact you shortly at ${data.email}.`);
    
    // Reset form
    this.reset();
});

// Add scroll animation for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});