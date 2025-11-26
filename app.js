// =================================================================
// APP - Main Application Logic
// =================================================================
// File ini berisi logika utama aplikasi

const App = {
    // ===== INITIALIZE APP =====
    init() {
        console.log('🚀 S2Moments App Initialized');

        try {
            // Render content
            this.renderContent();
        } catch (error) {
            console.error('❌ Error initializing app:', error);
            this.handleInitError(error);
        }
    },
    
    // ===== RENDER CONTENT =====
    renderContent() {
        // Render content
        this.renderAllSections();
        this.setupEventListeners();
        this.setupAnimations();
        this.setupNavigation();
        this.updateYear();
    },
    // ===== RENDER ALL SECTIONS =====
    renderAllSections() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.innerHTML = `
            ${Components.renderHero()}
            ${Components.renderCatalog()}
            ${Components.renderWhyChooseUs()}
            ${Components.renderFeatures()}
            ${Components.renderTestimonials()}
            ${Components.renderFaq()}
            ${Components.renderContact()}
            ${Components.renderPaymentMethods()}
        `;

        // Render footer
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = Components.renderFooter();
        }
    },

    // ===== SETUP EVENT LISTENERS =====
    setupEventListeners() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    },

    // ===== SETUP SCROLL ANIMATIONS =====
    setupAnimations() {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    const delay = entry.target.dataset.delay || '0s';
                    entry.target.style.transitionDelay = delay;
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Observe all elements with scroll-animate class
        document.querySelectorAll('.scroll-animate').forEach(el => {
            animationObserver.observe(el);
        });
    },

    // ===== SETUP NAVIGATION ACTIVE STATE =====
    setupNavigation() {
        const sections = document.querySelectorAll('main section[id]');
        const navLinks = document.querySelectorAll('.nav-link, .nav-center-button');

        const activateLink = (sectionId) => {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
            });
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activateLink(entry.target.id);
                }
            });
        }, {
            rootMargin: "-50% 0px -50% 0px"
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    },

    // ===== UPDATE CURRENT YEAR =====
    updateYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(element => {
            element.textContent = currentYear;
        });
    },

    // ===== SHOW DEMO MODAL =====
    showDemoModal() {
        // Trigger Alpine.js modal
        const event = new CustomEvent('show-demo-modal');
        window.dispatchEvent(event);
    },

    // ===== ERROR HANDLER =====
    handleInitError(error) {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.innerHTML = `
                <div class="text-center p-6">
                    <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    <h3 class="text-xl font-bold text-brand-dark mb-2">Oops! Terjadi Kesalahan</h3>
                    <p class="text-gray-600 mb-4">Website sedang mengalami masalah. Silakan refresh halaman.</p>
                    <button onclick="location.reload()" class="btn-gradient-gold px-6 py-3 rounded-lg font-semibold">
                        Refresh Halaman
                    </button>
                </div>
            `;
        }
    }
};

// ===== AUTO INITIALIZE WHEN DOM IS READY =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        App.init();
    });
} else {
    // DOM already loaded
    App.init();
}

