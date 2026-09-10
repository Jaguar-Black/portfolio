// Lucide Icons Init
lucide.createIcons();

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Slight delay for outline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 150, fill: "forwards" });
});

// Cursor Hover Effects
const hoverTargets = document.querySelectorAll('a, .glass-card, .impact-card, .clickable-item');
hoverTargets.forEach(target => {
    target.addEventListener('mouseover', () => {
        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
        cursorOutline.style.backgroundColor = 'rgba(255,255,255,0.1)';
    });
    target.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '30px';
        cursorOutline.style.height = '30px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal-up');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if(revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    // Trigger initial reveals with a slight delay
    setTimeout(() => {
        revealOnScroll();
    }, 200);
});

// Modal System 
function openModal(imgSrc) {
    document.getElementById('imageModal').style.display = 'flex';
    document.getElementById('modalImg').src = imgSrc;
    document.body.style.overflow = 'hidden'; 
}

function closeModal(e) {
    if(e.target.id === 'imageModal' || e.target.className === 'close') {
        document.getElementById('imageModal').style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
}

// Window Popup for Notion Links
function openPopup(url) {
    window.open(url, '_blank', 'width=1100,height=800,scrollbars=yes,resizable=yes');
}
