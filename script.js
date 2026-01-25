// ===== FLOATING PARTICLES EFFECT (Initialize First) =====
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 4px and 14px
        const size = Math.random() * 10 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random horizontal position
        const startX = Math.random() * window.innerWidth;
        particle.style.left = startX + 'px';
        
        // Random drift amount (more variation)
        const drift = (Math.random() - 0.5) * 150;
        particle.style.setProperty('--drift', drift + 'px');
        
        // Random animation duration between 10s and 18s
        const duration = Math.random() * 8 + 10;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        const delay = Math.random() * 3;
        particle.style.animationDelay = delay + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation completes and create new one
        setTimeout(() => {
            particle.remove();
            createParticle(); // Create replacement particle
        }, (duration + delay) * 1000);
    }
    
    // Create initial particles (increased to 50)
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createParticle(), i * 150);
    }
    
    // Continuously create additional particles to maintain density
    setInterval(() => {
        createParticle();
    }, 600);
}

// Initialize floating particles immediately when script loads
createFloatingParticles();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('checkbox');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    htmlElement.classList.toggle('dark');
    
    // Save theme preference
    const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Terima kasih! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.');
    
    // Reset form
    contactForm.reset();
});

// Smooth scroll for navigation links
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

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-btn, .nav-btn-primary');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Set active state on page load
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-btn, .nav-btn-primary');
    
    // Set home as active by default
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
        }
    });
});


// ===== ADVANCED ANIMATIONS & FEATURES =====

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
        delay: 100
    });
});

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = '<div class="loader"></div>';
    document.body.prepend(loadingScreen);
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.remove(), 500);
    }, 1000);
});

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.prepend(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Parallax Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card-hover, .skill-card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index % 3 + 1) * 2;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Typing Effect for Hero Text
function typeWriter(element, text, speed = 100) {
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

// Initialize typing effect
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const originalText = typingElement.textContent;
    setTimeout(() => {
        typeWriter(typingElement, originalText, 80);
    }, 500);
}

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add Ripple Effect to Buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add hover tilt effect to cards
document.querySelectorAll('.card-hover, .skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('#experience');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add smooth reveal to images
document.querySelectorAll('.project-image, .profile-photo').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '0';
        this.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            this.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
