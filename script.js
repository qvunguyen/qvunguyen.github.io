class NavigationManager {
    constructor() {
        this.menuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        this.isMenuOpen = false;

        this.init();
    }

    init() {
        if (this.menuBtn && this.navLinks) {
            this.menuBtn.addEventListener('click', this.toggleMenu.bind(this));
            this.setupKeyboardNavigation();
            this.setupClickOutside();
        }
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;

        if (this.isMenuOpen) {
            this.navLinks.classList.add('mobile-open');
            this.menuBtn.setAttribute('aria-expanded', 'true');
            this.menuBtn.innerHTML = '✕';
        } else {
            this.navLinks.classList.remove('mobile-open');
            this.menuBtn.setAttribute('aria-expanded', 'false');
            this.menuBtn.innerHTML = '☰';
        }
    }

    setupKeyboardNavigation() {
        this.menuBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleMenu();
            }
        });
    }

    setupClickOutside() {
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen &&
                !this.navLinks.contains(e.target) &&
                !this.menuBtn.contains(e.target)) {
                this.toggleMenu();
            }
        });
    }
}

class SmoothScrollManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));

                if (target) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupFocusManagement();
        this.setupKeyboardNavigation();
    }

    setupFocusManagement() {
        const focusableElements = 'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select';

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusable = Array.from(document.querySelectorAll(focusableElements))
                    .filter(el => !el.disabled && el.offsetParent !== null);

                const firstFocusable = focusable[0];
                const lastFocusable = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });
    }

    setupKeyboardNavigation() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });
    }
}

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    optimizeAnimations() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--transition-fast', '0ms');
        }

        prefersReducedMotion.addEventListener('change', () => {
            if (prefersReducedMotion.matches) {
                document.documentElement.style.setProperty('--transition-fast', '0ms');
            } else {
                document.documentElement.style.setProperty('--transition-fast', '0.3s ease');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new NavigationManager();
        new SmoothScrollManager();
        new AccessibilityEnhancer();
        new PerformanceOptimizer();
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

export { NavigationManager, SmoothScrollManager, AccessibilityEnhancer, PerformanceOptimizer };