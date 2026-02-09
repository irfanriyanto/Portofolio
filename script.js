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
    
    // Show success message in current language
    const successMessage = translations[currentLang].formSuccessMessage;
    alert(successMessage);
    
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
    
    const loader = document.createElement('div');
    loader.className = 'loader';
    
    // Create grid blocks (background decoration)
    const loaderGrid = document.createElement('div');
    loaderGrid.className = 'loader-grid';
    
    // Calculate number of blocks based on screen size
    const blocksCount = Math.floor((window.innerWidth / 100)) * Math.floor((window.innerHeight / 100));
    for (let i = 0; i < Math.min(blocksCount, 50); i++) {
        const block = document.createElement('div');
        block.className = 'loader-block';
        block.style.animationDelay = `${Math.random() * 1.5}s`;
        loaderGrid.appendChild(block);
    }
    
    // Create corner accents
    for (let i = 0; i < 4; i++) {
        const accent = document.createElement('div');
        accent.className = 'loader-accent';
        loader.appendChild(accent);
    }
    
    // Create floating particles
    for (let i = 0; i < 4; i++) {
        const particle = document.createElement('div');
        particle.className = 'loader-particle';
        loader.appendChild(particle);
    }
    
    // Center content
    const loaderCenter = document.createElement('div');
    loaderCenter.className = 'loader-center';
    
    // Brand/Logo
    const loaderBrand = document.createElement('div');
    loaderBrand.className = 'loader-brand';
    const brandText = document.createElement('div');
    brandText.className = 'loader-brand-text';
    brandText.textContent = 'IR';
    loaderBrand.appendChild(brandText);
    
    // Progress bar
    const loaderProgress = document.createElement('div');
    loaderProgress.className = 'loader-progress';
    const progressBar = document.createElement('div');
    progressBar.className = 'loader-progress-bar';
    loaderProgress.appendChild(progressBar);
    
    // Loading text
    const loaderText = document.createElement('div');
    loaderText.className = 'loader-text';
    loaderText.textContent = 'LOADING';
    
    // Assemble center content
    loaderCenter.appendChild(loaderBrand);
    loaderCenter.appendChild(loaderProgress);
    loaderCenter.appendChild(loaderText);
    
    // Assemble loader
    loader.appendChild(loaderGrid);
    loader.appendChild(loaderCenter);
    loadingScreen.appendChild(loader);
    document.body.prepend(loadingScreen);
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.remove(), 500);
    }, 2200);
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
            const counters = document.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

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

// ===== MULTI-LANGUAGE FEATURE =====

// Translation object
const translations = {
    id: {
        // Navigation
        navHome: 'Home',
        navAbout: 'Tentang',
        navSkills: 'Keahlian',
        navProjects: 'Project',
        navExperience: 'Pengalaman',
        navContact: 'Kontak',
        
        // Hero Section
        heroGreeting: 'Halo, Saya',
        heroName: 'Irfan Riyanto',
        heroTitle: 'IT Support Professional & Freelance Web Developer',
        heroDescription: 'Dengan pengalaman lebih dari 5 tahun sebagai IT Support yang berfokus pada hardware support, software support dan network administration. Juga aktif sebagai freelance web developer dengan keahlian HTML, CSS, JavaScript dan PHP untuk membangun website yang fungsional dan modern.',
        heroButtonProject: 'Lihat Project',
        heroButtonContact: 'Hubungi Saya',
        
        // About Section
        aboutTitle: 'Tentang Saya',
        aboutSubtitle: 'IT Professional & Freelance Web Developer',
        aboutText1: 'Saya adalah seorang IT Support professional dengan passion dalam teknologi dan pemecahan masalah. Selama >5 tahun berkarir di bidang ini, saya telah membantu ratusan pengguna mengatasi berbagai tantangan teknis dan meningkatkan produktivitas mereka.',
        aboutText2: 'Selain itu, saya juga aktif sebagai freelance web developer, mengembangkan website dengan HTML, CSS, JavaScript dan PHP. Dari sistem manajemen warga hingga platform direktori bisnis, saya fokus menciptakan solusi web yang user-friendly dan sesuai kebutuhan klien. Keahlian saya mencakup troubleshooting hardware & software, manajemen jaringan MikroTik, sistem administrasi dan web development yang fungsional.',
        
        // Skills Section
        skillsTitle: 'Keahlian Teknis',
        skill1Title: 'Hardware Support',
        skill1Desc: 'Troubleshooting, maintenance, replacement dan upgrade komponen komputer, laptop dan perangkat IT lainnya.',
        skill2Title: 'Software Support',
        skill2Desc: 'Instalasi, konfigurasi dan troubleshooting sistem operasi (Windows/Linux), aplikasi bisnis, driver, printer sharing dan software enterprise.',
        skill3Title: 'Network Administration',
        skill3Desc: 'Konfigurasi Router MikroTik menggunakan Winbox, setup client-server architecture dan troubleshooting konektivitas LAN/WAN.',
        skill4Title: 'System Administration',
        skill4Desc: 'Manajemen Active Directory, user accounts, permissions, backup systems dan server maintenance.',
        skill5Title: 'Security & Compliance',
        skill5Desc: 'Implementasi security policies, antivirus management dan compliance dengan standar keamanan IT.',
        skill6Title: 'User Training',
        skill6Desc: 'Memberikan pelatihan teknis kepada end-user dan membuat dokumentasi SOP yang mudah dipahami.',
        
        // Projects Section
        projectsTitle: 'Portofolio Project',
        project1Title: 'RukunApp',
        project1Desc: 'Sistem Manajemen dan Administrasi Warga untuk mengelola data warga, administrasi warga, kegiatan warga, arsip dokumen dan lain-lain secara digital.',
        project1Feature: 'Manajemen Data Warga & Administrasi Desa',
        project2Title: 'UMKMTegal',
        project2Desc: 'Website direktori UMKM di daerah Tegal dan sekitarnya untuk mempromosikan UMKM lokal dan memudahkan masyarakat menemukan produk UMKM.',
        project2Feature: 'Direktori UMKM Lokal Tegal',
        project3Title: 'NgopiTegal',
        project3Desc: 'Website direktori coffee shop yang berada di Tegal dengan informasi lengkap seperti lokasi, menu, dan review untuk para pecinta kopi.',
        project3Feature: 'Direktori Coffee Shop Tegal',
        project4Title: 'Klaim EDP CRB',
        project4Desc: 'Sistem klaim internal perusahaan untuk mengelola klaim BBM, service kendaraan, tol dan keperluan operasional lainnya secara digital.',
        project4Feature: 'Sistem Klaim Internal Perusahaan',
        
        // Experience Section
        experienceTitle: 'Pengalaman Kerja',
        expJobTitle: 'IT Support Specialist',
        expCompany: 'PT Indomarco Prismatama Cirebon',
        expPeriod: '2021 - 2026',
        expDescription: 'Bertanggung jawab atas pengelolaan infrastruktur IT perusahaan dengan fokus pada hardware, software dan networking. Menangani 50+ tiket support per minggu dengan tingkat resolusi 95%.',
        expHardwareTitle: 'Hardware Support:',
        expHardware1: '• Setup komputer baru sesuai spesifikasi kebutuhan',
        expHardware2: '• Troubleshooting dan perbaikan hardware (motherboard, RAM, HDD/SSD, power supply)',
        expHardware3: '• Replacement komponen komputer yang rusak atau upgrade',
        expHardware4: '• Preventive maintenance untuk 200+ workstation dan perangkat IT',
        expHardware5: '• Diagnosa dan resolusi masalah hardware secara efisien',
        expSoftwareTitle: 'Software Support:',
        expSoftware1: '• Instalasi dan konfigurasi sistem operasi (Windows/Linux)',
        expSoftware2: '• Instalasi dan setup aplikasi bisnis dan productivity tools',
        expSoftware3: '• Update dan instalasi driver perangkat keras',
        expSoftware4: '• Maintenance dan optimasi performa sistem operasi',
        expSoftware5: '• Troubleshooting software issues dan error resolution',
        expSoftware6: '• Konfigurasi printer sharing antar komputer dalam jaringan',
        expNetworkTitle: 'Network Administration:',
        expNetwork1: '• Konfigurasi dan management Router MikroTik menggunakan Winbox',
        expNetwork2: '• Setup koneksi client-server architecture',
        expNetwork3: '• Troubleshooting konektivitas jaringan LAN/WAN',
        expNetwork4: '• Monitoring dan maintenance infrastruktur jaringan',
        expNetwork5: '• Implementasi network security policies',
        stat1: 'Tahun Pengalaman',
        stat2: 'Perangkat Dikelola',
        stat3: 'Tingkat Resolusi',
        
        // Contact Section
        contactTitle: 'Hubungi Saya',
        contactNameLabel: 'Nama',
        contactNamePlaceholder: 'Nama Anda',
        contactEmailLabel: 'Email',
        contactEmailPlaceholder: 'email@example.com',
        contactMessageLabel: 'Pesan',
        contactMessagePlaceholder: 'Tulis pesan Anda di sini...',
        contactSubmitButton: 'Kirim Pesan',
        contactEmail: 'Email',
        contactLinkedIn: 'LinkedIn',
        contactGitHub: 'GitHub',
        contactInstagram: 'Instagram',
        
        // Footer
        footerText: '© 2026 Irfan Riyanto. Dibuat dengan passion untuk teknologi.',
        
        // Form Messages
        formSuccessMessage: 'Terima kasih! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.'
    },
    en: {
        // Navigation
        navHome: 'Home',
        navAbout: 'About',
        navSkills: 'Skills',
        navProjects: 'Projects',
        navExperience: 'Experience',
        navContact: 'Contact',
        
        // Hero Section
        heroGreeting: 'Hello, I\'m',
        heroName: 'Irfan Riyanto',
        heroTitle: 'IT Support Professional & Freelance Web Developer',
        heroDescription: 'With over 5 years of experience as an IT Support professional focusing on hardware support, software support, and network administration. Also active as a freelance web developer with expertise in HTML, CSS, JavaScript and PHP to build functional and modern websites.',
        heroButtonProject: 'View Projects',
        heroButtonContact: 'Contact Me',
        
        // About Section
        aboutTitle: 'About Me',
        aboutSubtitle: 'IT Professional & Freelance Web Developer',
        aboutText1: 'I am an IT Support professional with a passion for technology and problem-solving. Over >5 years in this field, I have helped hundreds of users overcome various technical challenges and improve their productivity.',
        aboutText2: 'Additionally, I am also active as a freelance web developer, developing websites with HTML, CSS, JavaScript and PHP. From resident management systems to business directory platforms, I focus on creating user-friendly web solutions tailored to client needs. My expertise includes hardware & software troubleshooting, MikroTik network management, system administration, and functional web development.',
        
        // Skills Section
        skillsTitle: 'Technical Skills',
        skill1Title: 'Hardware Support',
        skill1Desc: 'Troubleshooting, maintenance, replacement and upgrade of computer components, laptops and other IT devices.',
        skill2Title: 'Software Support',
        skill2Desc: 'Installation, configuration and troubleshooting of operating systems (Windows/Linux), business applications, drivers, printer sharing and enterprise software.',
        skill3Title: 'Network Administration',
        skill3Desc: 'MikroTik Router configuration using Winbox, client-server architecture setup and LAN/WAN connectivity troubleshooting.',
        skill4Title: 'System Administration',
        skill4Desc: 'Active Directory management, user accounts, permissions, backup systems and server maintenance.',
        skill5Title: 'Security & Compliance',
        skill5Desc: 'Implementation of security policies, antivirus management and compliance with IT security standards.',
        skill6Title: 'User Training',
        skill6Desc: 'Providing technical training to end-users and creating easy-to-understand SOP documentation.',
        
        // Projects Section
        projectsTitle: 'Project Portfolio',
        project1Title: 'RukunApp',
        project1Desc: 'Resident Management and Administration System to manage resident data, administration, activities, document archives and more digitally.',
        project1Feature: 'Resident Data & Village Administration Management',
        project2Title: 'UMKMTegal',
        project2Desc: 'MSME directory website in Tegal area to promote local MSMEs and help people find MSME products.',
        project2Feature: 'Tegal Local MSME Directory',
        project3Title: 'NgopiTegal',
        project3Desc: 'Coffee shop directory website in Tegal with complete information such as location, menu, and reviews for coffee lovers.',
        project3Feature: 'Tegal Coffee Shop Directory',
        project4Title: 'Klaim EDP CRB',
        project4Desc: 'Internal company claim system to manage fuel claims, vehicle service, toll and other operational needs digitally.',
        project4Feature: 'Internal Company Claim System',
        
        // Experience Section
        experienceTitle: 'Work Experience',
        expJobTitle: 'IT Support Specialist',
        expCompany: 'PT Indomarco Prismatama Cirebon',
        expPeriod: '2021 - 2026',
        expDescription: 'Responsible for managing company IT infrastructure with focus on hardware, software and networking. Handling 50+ support tickets per week with 95% resolution rate.',
        expHardwareTitle: 'Hardware Support:',
        expHardware1: '• Setup new computers according to specifications',
        expHardware2: '• Hardware troubleshooting and repair (motherboard, RAM, HDD/SSD, power supply)',
        expHardware3: '• Replacement of damaged computer components or upgrades',
        expHardware4: '• Preventive maintenance for 200+ workstations and IT devices',
        expHardware5: '• Efficient hardware problem diagnosis and resolution',
        expSoftwareTitle: 'Software Support:',
        expSoftware1: '• Operating system installation and configuration (Windows/Linux)',
        expSoftware2: '• Business applications and productivity tools installation and setup',
        expSoftware3: '• Hardware driver updates and installation',
        expSoftware4: '• Operating system maintenance and performance optimization',
        expSoftware5: '• Software issues troubleshooting and error resolution',
        expSoftware6: '• Printer sharing configuration between computers on network',
        expNetworkTitle: 'Network Administration:',
        expNetwork1: '• MikroTik Router configuration and management using Winbox',
        expNetwork2: '• Client-server architecture connection setup',
        expNetwork3: '• LAN/WAN network connectivity troubleshooting',
        expNetwork4: '• Network infrastructure monitoring and maintenance',
        expNetwork5: '• Network security policies implementation',
        stat1: 'Years Experience',
        stat2: 'Devices Managed',
        stat3: 'Resolution Rate',
        
        // Contact Section
        contactTitle: 'Contact Me',
        contactNameLabel: 'Name',
        contactNamePlaceholder: 'Your Name',
        contactEmailLabel: 'Email',
        contactEmailPlaceholder: 'email@example.com',
        contactMessageLabel: 'Message',
        contactMessagePlaceholder: 'Write your message here...',
        contactSubmitButton: 'Send Message',
        contactEmail: 'Email',
        contactLinkedIn: 'LinkedIn',
        contactGitHub: 'GitHub',
        contactInstagram: 'Instagram',
        
        // Footer
        footerText: '© 2026 Irfan Riyanto. Made with passion for technology.',
        
        // Form Messages
        formSuccessMessage: 'Thank you! Your message has been sent. I will contact you soon.'
    }
};

// Get current language from localStorage or default to 'id'
let currentLang = localStorage.getItem('language') || 'id';

// Function to update all text content
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    console.log('Updating language to:', lang); // Debug log
    
    // Update language buttons
    const langTextEl = document.getElementById('langText');
    const floatingLangTextEl = document.getElementById('floatingLangText');
    if (langTextEl) langTextEl.textContent = lang.toUpperCase();
    if (floatingLangTextEl) floatingLangTextEl.textContent = lang.toUpperCase();
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Navigation
    document.querySelectorAll('[data-i18n="navHome"]').forEach(el => el.textContent = t.navHome);
    document.querySelectorAll('[data-i18n="navAbout"]').forEach(el => el.textContent = t.navAbout);
    document.querySelectorAll('[data-i18n="navSkills"]').forEach(el => el.textContent = t.navSkills);
    document.querySelectorAll('[data-i18n="navProjects"]').forEach(el => el.textContent = t.navProjects);
    document.querySelectorAll('[data-i18n="navExperience"]').forEach(el => el.textContent = t.navExperience);
    document.querySelectorAll('[data-i18n="navContact"]').forEach(el => el.textContent = t.navContact);
    
    // Hero Section
    const heroGreeting = document.querySelector('[data-i18n="heroGreeting"]');
    if (heroGreeting) {
        heroGreeting.innerHTML = t.heroGreeting + '<br><span class="text-accent typing-text">' + t.heroName + '</span>';
    }
    
    document.querySelectorAll('[data-i18n="heroTitle"]').forEach(el => el.textContent = t.heroTitle);
    document.querySelectorAll('[data-i18n="heroDescription"]').forEach(el => el.textContent = t.heroDescription);
    document.querySelectorAll('[data-i18n="heroButtonProject"]').forEach(el => el.textContent = t.heroButtonProject);
    document.querySelectorAll('[data-i18n="heroButtonContact"]').forEach(el => el.textContent = t.heroButtonContact);
    
    // About Section
    document.querySelectorAll('[data-i18n="aboutTitle"]').forEach(el => el.textContent = t.aboutTitle);
    document.querySelectorAll('[data-i18n="aboutSubtitle"]').forEach(el => el.textContent = t.aboutSubtitle);
    document.querySelectorAll('[data-i18n="aboutText1"]').forEach(el => el.textContent = t.aboutText1);
    document.querySelectorAll('[data-i18n="aboutText2"]').forEach(el => el.textContent = t.aboutText2);
    
    // Skills Section
    console.log('Updating Skills section...'); // Debug
    document.querySelectorAll('[data-i18n="skillsTitle"]').forEach(el => el.textContent = t.skillsTitle);
    document.querySelectorAll('[data-i18n="skill1Title"]').forEach(el => el.textContent = t.skill1Title);
    document.querySelectorAll('[data-i18n="skill1Desc"]').forEach(el => el.textContent = t.skill1Desc);
    document.querySelectorAll('[data-i18n="skill2Title"]').forEach(el => el.textContent = t.skill2Title);
    document.querySelectorAll('[data-i18n="skill2Desc"]').forEach(el => el.textContent = t.skill2Desc);
    document.querySelectorAll('[data-i18n="skill3Title"]').forEach(el => el.textContent = t.skill3Title);
    document.querySelectorAll('[data-i18n="skill3Desc"]').forEach(el => el.textContent = t.skill3Desc);
    document.querySelectorAll('[data-i18n="skill4Title"]').forEach(el => el.textContent = t.skill4Title);
    document.querySelectorAll('[data-i18n="skill4Desc"]').forEach(el => el.textContent = t.skill4Desc);
    document.querySelectorAll('[data-i18n="skill5Title"]').forEach(el => el.textContent = t.skill5Title);
    document.querySelectorAll('[data-i18n="skill5Desc"]').forEach(el => el.textContent = t.skill5Desc);
    document.querySelectorAll('[data-i18n="skill6Title"]').forEach(el => el.textContent = t.skill6Title);
    document.querySelectorAll('[data-i18n="skill6Desc"]').forEach(el => el.textContent = t.skill6Desc);
    console.log('Skills section updated'); // Debug
    
    // Projects Section
    document.querySelectorAll('[data-i18n="projectsTitle"]').forEach(el => el.textContent = t.projectsTitle);
    document.querySelectorAll('[data-i18n="project1Title"]').forEach(el => el.textContent = t.project1Title);
    document.querySelectorAll('[data-i18n="project1Desc"]').forEach(el => el.textContent = t.project1Desc);
    document.querySelectorAll('[data-i18n="project1Feature"]').forEach(el => el.textContent = t.project1Feature);
    document.querySelectorAll('[data-i18n="project2Title"]').forEach(el => el.textContent = t.project2Title);
    document.querySelectorAll('[data-i18n="project2Desc"]').forEach(el => el.textContent = t.project2Desc);
    document.querySelectorAll('[data-i18n="project2Feature"]').forEach(el => el.textContent = t.project2Feature);
    document.querySelectorAll('[data-i18n="project3Title"]').forEach(el => el.textContent = t.project3Title);
    document.querySelectorAll('[data-i18n="project3Desc"]').forEach(el => el.textContent = t.project3Desc);
    document.querySelectorAll('[data-i18n="project3Feature"]').forEach(el => el.textContent = t.project3Feature);
    document.querySelectorAll('[data-i18n="project4Title"]').forEach(el => el.textContent = t.project4Title);
    document.querySelectorAll('[data-i18n="project4Desc"]').forEach(el => el.textContent = t.project4Desc);
    document.querySelectorAll('[data-i18n="project4Feature"]').forEach(el => el.textContent = t.project4Feature);
    
    // Experience Section
    document.querySelectorAll('[data-i18n="experienceTitle"]').forEach(el => el.textContent = t.experienceTitle);
    document.querySelectorAll('[data-i18n="expJobTitle"]').forEach(el => el.textContent = t.expJobTitle);
    document.querySelectorAll('[data-i18n="expCompany"]').forEach(el => el.textContent = t.expCompany);
    document.querySelectorAll('[data-i18n="expPeriod"]').forEach(el => el.textContent = t.expPeriod);
    document.querySelectorAll('[data-i18n="expDescription"]').forEach(el => el.textContent = t.expDescription);
    document.querySelectorAll('[data-i18n="expHardwareTitle"]').forEach(el => el.textContent = t.expHardwareTitle);
    document.querySelectorAll('[data-i18n="expHardware1"]').forEach(el => el.textContent = t.expHardware1);
    document.querySelectorAll('[data-i18n="expHardware2"]').forEach(el => el.textContent = t.expHardware2);
    document.querySelectorAll('[data-i18n="expHardware3"]').forEach(el => el.textContent = t.expHardware3);
    document.querySelectorAll('[data-i18n="expHardware4"]').forEach(el => el.textContent = t.expHardware4);
    document.querySelectorAll('[data-i18n="expHardware5"]').forEach(el => el.textContent = t.expHardware5);
    document.querySelectorAll('[data-i18n="expSoftwareTitle"]').forEach(el => el.textContent = t.expSoftwareTitle);
    document.querySelectorAll('[data-i18n="expSoftware1"]').forEach(el => el.textContent = t.expSoftware1);
    document.querySelectorAll('[data-i18n="expSoftware2"]').forEach(el => el.textContent = t.expSoftware2);
    document.querySelectorAll('[data-i18n="expSoftware3"]').forEach(el => el.textContent = t.expSoftware3);
    document.querySelectorAll('[data-i18n="expSoftware4"]').forEach(el => el.textContent = t.expSoftware4);
    document.querySelectorAll('[data-i18n="expSoftware5"]').forEach(el => el.textContent = t.expSoftware5);
    document.querySelectorAll('[data-i18n="expSoftware6"]').forEach(el => el.textContent = t.expSoftware6);
    document.querySelectorAll('[data-i18n="expNetworkTitle"]').forEach(el => el.textContent = t.expNetworkTitle);
    document.querySelectorAll('[data-i18n="expNetwork1"]').forEach(el => el.textContent = t.expNetwork1);
    document.querySelectorAll('[data-i18n="expNetwork2"]').forEach(el => el.textContent = t.expNetwork2);
    document.querySelectorAll('[data-i18n="expNetwork3"]').forEach(el => el.textContent = t.expNetwork3);
    document.querySelectorAll('[data-i18n="expNetwork4"]').forEach(el => el.textContent = t.expNetwork4);
    document.querySelectorAll('[data-i18n="expNetwork5"]').forEach(el => el.textContent = t.expNetwork5);
    document.querySelectorAll('[data-i18n="stat1"]').forEach(el => el.textContent = t.stat1);
    document.querySelectorAll('[data-i18n="stat2"]').forEach(el => el.textContent = t.stat2);
    document.querySelectorAll('[data-i18n="stat3"]').forEach(el => el.textContent = t.stat3);
    
    // Contact Section
    document.querySelectorAll('[data-i18n="contactTitle"]').forEach(el => el.textContent = t.contactTitle);
    document.querySelectorAll('[data-i18n="contactNameLabel"]').forEach(el => el.textContent = t.contactNameLabel);
    document.querySelectorAll('[data-i18n="contactEmailLabel"]').forEach(el => el.textContent = t.contactEmailLabel);
    document.querySelectorAll('[data-i18n="contactMessageLabel"]').forEach(el => el.textContent = t.contactMessageLabel);
    document.querySelectorAll('[data-i18n="contactSubmitButton"]').forEach(el => el.textContent = t.contactSubmitButton);
    
    // Update placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    if (nameInput) nameInput.placeholder = t.contactNamePlaceholder;
    if (emailInput) emailInput.placeholder = t.contactEmailPlaceholder;
    if (messageInput) messageInput.placeholder = t.contactMessagePlaceholder;
    
    document.querySelectorAll('[data-i18n="contactEmail"]').forEach(el => el.textContent = t.contactEmail);
    document.querySelectorAll('[data-i18n="contactLinkedIn"]').forEach(el => el.textContent = t.contactLinkedIn);
    document.querySelectorAll('[data-i18n="contactGitHub"]').forEach(el => el.textContent = t.contactGitHub);
    document.querySelectorAll('[data-i18n="contactInstagram"]').forEach(el => el.textContent = t.contactInstagram);
    
    // Footer
    document.querySelectorAll('[data-i18n="footerText"]').forEach(el => el.textContent = t.footerText);
    
    // Refresh AOS animations after language change
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    console.log('Language update completed'); // Debug log
}

// Language toggle event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Desktop language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'id' ? 'en' : 'id';
            updateLanguage(newLang);
        });
    }
    
    // Mobile floating language toggle
    const floatingLangBtn = document.getElementById('floatingLangBtn');
    if (floatingLangBtn) {
        floatingLangBtn.addEventListener('click', () => {
            const newLang = currentLang === 'id' ? 'en' : 'id';
            updateLanguage(newLang);
        });
    }
    
    // Initialize language on page load
    updateLanguage(currentLang);
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
