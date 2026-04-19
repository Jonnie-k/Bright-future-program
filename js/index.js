//1. Animated Counter for Impacts
function animateNumbers() {
    // Targets the class used in impacts.html
    const counters = document.querySelectorAll('.impact-number');
    
    counters.forEach(counter => {
        const updateCount = () => {
            // Uses 'data-count' attribute from your HTML
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const speed = 200; 
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Trigger animation when the impacts section is in view
const impactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            impactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const impactSection = document.querySelector('.impacts');
if (impactSection) {
    impactObserver.observe(impactSection);
}

// 2. Form Submissions
// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('contact-message');
        if (status) {
            status.textContent = 'Thank you! Your message has been sent.';
            status.style.color = 'green';
        }
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Donation Form Handler
const donationForm = document.getElementById('donationForm');
if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = document.getElementById('payment-message');
        const donorName = document.getElementById('fullName').value;
        
        if (message) {
            message.innerHTML = `<div class="success-message">Thank you, ${donorName}! Your donation has been received.</div>`;
            message.style.color = 'green';
        }
        donationForm.reset();
    });
}

// 3. Active Navigation Highlighting
// Matches the current filename to the link href
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// 4. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            navbar.style.background = 'rgba(255,255,255,0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = '#FFFFFF';
        }
    }
});