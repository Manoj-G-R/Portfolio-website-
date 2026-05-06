// ==========================================
// PORTFOLIO WEBSITE - JavaScript
// Created for: Manoj G R
// ==========================================

// ==================== DARK MODE ==================== //
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';
document.body.classList.add(currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateThemeIcon('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeIcon('dark-mode');
    }
});

function updateThemeIcon(theme) {
    if (theme === 'dark-mode') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// ==================== MOBILE MENU ==================== //
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== SCROLL TO TOP ==================== //
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== SMOOTH SCROLL NAVIGATION ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation on scroll
document.querySelectorAll('.skill-card, .project-card, .blog-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// ==================== FORM VALIDATION ==================== //
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateSubject(subject) {
    return subject.trim().length >= 5;
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// Clear error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
}

// Show error
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    formStatus.textContent = '';
    formStatus.classList.remove('success', 'error');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Validate fields
    if (!validateName(name)) {
        showError('name', 'Please enter a valid name (at least 2 characters)');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!validateSubject(subject)) {
        showError('subject', 'Subject must be at least 5 characters');
        isValid = false;
    }

    if (!validateMessage(message)) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        formStatus.textContent = '✓ Message sent successfully! Thank you for reaching out.';
        formStatus.classList.add('success');
        contactForm.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.classList.remove('success');
        }, 5000);
    } else {
        formStatus.textContent = '✗ Please fill in all fields correctly';
        formStatus.classList.add('error');
    }
});

// ==================== REAL-TIME FORM VALIDATION ==================== //
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        clearErrors();
    });

    input.addEventListener('focus', () => {
        clearErrors();
    });
});

// ==================== PARALLAX EFFECT ==================== //
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== NAVBAR SCROLL EFFECT ==================== //
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== ANIMATE COUNTER NUMBERS ==================== //
function animateCounter(element, target, duration = 2000) {
    let currentValue = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, 16);
}

// ==================== HOVER EFFECTS ON ELEMENTS ==================== //
document.querySelectorAll('.skill-card, .project-card, .blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== ACTIVE NAV LINK ==================== //
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let fromTop = window.scrollY + 100;

    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section) {
            if ((section.offsetTop <= fromTop) && (section.offsetTop + section.offsetHeight > fromTop)) {
                navLinks.forEach(l => l.style.color = 'var(--text-dark)');
                link.style.color = 'var(--primary-color)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ==================== TYPING ANIMATION FOR HERO TEXT ==================== //
const heroTitle = document.querySelector('.hero-title');
const heroName = document.querySelector('.hero-name');

function typeAnimation(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ==================== LOAD PAGE ANIMATIONS ==================== //
window.addEventListener('load', () => {
    // Animate hero elements on page load
    document.querySelectorAll('.letter').forEach((letter, index) => {
        letter.style.animation = `slideUp 0.6s ease ${index * 0.1}s backwards`;
    });

    // Add animation to navbar
    document.querySelector('.logo').style.animation = 'popIn 0.8s ease';
});

// ==================== MOUSE MOVE EFFECT ON HERO ==================== //
const hero = document.querySelector('.hero');

if (hero) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            const moveX = x * 10 * (index + 1);
            const moveY = y * 10 * (index + 1);
            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// ==================== INTERSECTION OBSERVER FOR SKILL CARDS ==================== //
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'scaleIn 0.6s ease forwards';
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(card => {
    skillObserver.observe(card);
});

// ==================== PROJECT FILTER ==================== //
// You can add filter functionality here for projects by category

// ==================== BLOG ARTICLE LINKS ==================== //
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
        // Navigate to blog article or open modal
        console.log('Blog article clicked');
    });
});

// ==================== SOCIAL LINK ANIMATIONS ==================== //
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.2) rotate(360deg)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
});

// ==================== BUTTON RIPPLE EFFECT ==================== //
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ==================== SCROLL REVEAL ANIMATION ==================== //
function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .blog-card, .skill-card');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// ==================== PAGE LOAD ANIMATION ==================== //
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.8s ease';

    // Stagger animation for multiple elements
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// ==================== PERFORMANCE OPTIMIZATION ==================== //
// Debounce scroll and resize events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

const debouncedScroll = debounce(updateActiveLink, 100);
window.addEventListener('scroll', debouncedScroll);

// ==================== KEYBOARD SHORTCUTS ==================== //
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search (or scroll to contact)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
    }

    // Home key to scroll to top
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // End key to scroll to bottom
    if (e.key === 'End') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// ==================== NOTIFICATION SYSTEM ==================== //
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.4s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.4s ease forwards';
        setTimeout(() => notification.remove(), 400);
    }, duration);
}

// ==================== LOCAL STORAGE FOR FORM DATA ==================== //
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    // Load saved data
    input.value = localStorage.getItem(input.id) || '';

    // Save data as user types
    input.addEventListener('input', () => {
        localStorage.setItem(input.id, input.value);
    });
});

// Clear saved form data on successful submission
contactForm.addEventListener('submit', () => {
    inputs.forEach(input => {
        localStorage.removeItem(input.id);
    });
});

// ==================== CONSOLE MESSAGE ==================== //
console.log('%cWelcome to Manoj G R Portfolio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cCheck out the source code and feel free to get in touch!', 'font-size: 14px; color: #ec4899;');

// ==================== INITIAL SETUP ==================== //
document.addEventListener('DOMContentLoaded', () => {
    // Trigger scroll event to set active nav link
    updateActiveLink();

    // Add loaded class to body
    document.body.classList.add('loaded');
});
