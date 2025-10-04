// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const menuBtn = document.getElementById('menu-btn');
                menuBtn.querySelector('i').classList.remove('fa-times');
                menuBtn.querySelector('i').classList.add('fa-bars');
            }
        }
    });
});

// Animate Skill Bars on Scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skill-card')) {
                animateSkillBars();
            }
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Typewriter Effect for Hero Text (optional)
function typeWriterEffect() {
    const text = "Web Developer | Problem Solver | Tech Enthusiast";
    const element = document.querySelector('.hero-subtitle');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    if (element) {
        element.innerHTML = '';
        type();
    }
}

// Initialize typewriter effect when page loads
window.addEventListener('load', typeWriterEffect);