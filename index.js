// Modern Portfolio JavaScript - Enhanced with theme system
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme system
    initializeTheme();

    // Initialize navigation
    initializeNavigation();

    // Initialize contact form
    initializeContactForm();

    // Initialize scroll effects
    initializeScrollEffects();
});

// Theme Management System
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Navigation System
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Mobile menu toggle
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileNav.classList.contains('active');

            if (isOpen) {
                mobileNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            } else {
                mobileNav.classList.add('active');
                mobileMenuBtn.classList.add('active');
            }
        });
    }

    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculate offset for fixed header
                    const headerHeight = 64; // 4rem = 64px
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    // Smooth scroll
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (window.innerWidth < 768) {
                        mobileNav?.classList.remove('active');
                        mobileMenuBtn?.classList.remove('active');
                    }
                }
            }
        });
    });

    // Update active navigation based on scroll
    updateActiveNavigation();
}

// Scroll Effects
function initializeScrollEffects() {
    let ticking = false;

    function updateScroll() {
        updateActiveNavigation();
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    });
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100; // Offset for better UX

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Contact Form System
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    const formStatus = document.getElementById('form-status');
    const messageCount = document.getElementById('message-count');

    // Input sanitization function
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Name validation function
    function isValidName(name) {
        const nameRegex = /^[A-Za-z\s\-']{2,100}$/;
        return nameRegex.test(name) && name.trim().length >= 2;
    }

    // Show error message
    function showError(field, message) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        formGroup.classList.add('error');
        formGroup.classList.remove('success');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    // Show success state
    function showSuccess(field) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    // Clear validation state
    function clearValidation(field) {
        const formGroup = field.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        formGroup.classList.remove('error', 'success');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    // Form status display functions
    function showFormStatus(message, type) {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.className = `form-status ${type}`;
            formStatus.style.display = 'block';
        }
    }

    function hideFormStatus() {
        if (formStatus) {
            formStatus.style.display = 'none';
        }
    }

    // Real-time validation
    if (nameField) {
        nameField.addEventListener('input', function() {
            const value = this.value.trim();
            if (value === '') {
                clearValidation(this);
            } else if (!isValidName(value)) {
                showError(this, 'Please enter a valid name (2-100 characters, letters only)');
            } else {
                showSuccess(this);
            }
        });
    }

    if (emailField) {
        emailField.addEventListener('input', function() {
            const value = this.value.trim();
            if (value === '') {
                clearValidation(this);
            } else if (!isValidEmail(value)) {
                showError(this, 'Please enter a valid email address');
            } else {
                showSuccess(this);
            }
        });
    }

    if (subjectField) {
        subjectField.addEventListener('input', function() {
            const value = this.value.trim();
            if (value === '') {
                clearValidation(this);
            } else if (value.length < 5) {
                showError(this, 'Subject must be at least 5 characters long');
            } else if (value.length > 200) {
                showError(this, 'Subject must be less than 200 characters');
            } else {
                showSuccess(this);
            }
        });
    }

    if (messageField) {
        messageField.addEventListener('input', function() {
            const value = this.value.trim();
            const count = value.length;

            if (messageCount) {
                messageCount.textContent = count;

                // Update character count styling
                const countElement = messageCount.closest('.character-count');
                if (countElement) {
                    countElement.classList.remove('warning', 'danger');

                    if (count > 4500) {
                        countElement.classList.add('danger');
                    } else if (count > 4000) {
                        countElement.classList.add('warning');
                    }
                }
            }

            if (value === '') {
                clearValidation(this);
            } else if (count < 10) {
                showError(this, 'Message must be at least 10 characters long');
            } else if (count > 5000) {
                showError(this, 'Message must be less than 5000 characters');
            } else {
                showSuccess(this);
            }
        });
    }

    // Form submission handling
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;

        // Name validation
        const nameValue = nameField?.value.trim() || '';
        if (!nameValue) {
            showError(nameField, 'Name is required');
            isValid = false;
        } else if (!isValidName(nameValue)) {
            showError(nameField, 'Please enter a valid name');
            isValid = false;
        }

        // Email validation
        const emailValue = emailField?.value.trim() || '';
        if (!emailValue) {
            showError(emailField, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(emailField, 'Please enter a valid email address');
            isValid = false;
        }

        // Subject validation
        const subjectValue = subjectField?.value.trim() || '';
        if (!subjectValue) {
            showError(subjectField, 'Subject is required');
            isValid = false;
        } else if (subjectValue.length < 5 || subjectValue.length > 200) {
            showError(subjectField, 'Subject must be 5-200 characters long');
            isValid = false;
        }

        // Message validation
        const messageValue = messageField?.value.trim() || '';
        if (!messageValue) {
            showError(messageField, 'Message is required');
            isValid = false;
        } else if (messageValue.length < 10 || messageValue.length > 5000) {
            showError(messageField, 'Message must be 10-5000 characters long');
            isValid = false;
        }

        // Rate limiting check
        const lastSubmission = localStorage.getItem('lastFormSubmission');
        const now = Date.now();
        if (lastSubmission && (now - parseInt(lastSubmission)) < 60000) {
            showFormStatus('Please wait at least 1 minute between submissions.', 'error');
            return;
        }

        if (!isValid) {
            showFormStatus('Please correct the errors above.', 'error');
            return;
        }

        // Show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
        }
        if (btnText) {
            btnText.style.display = 'none';
        }
        if (btnLoading) {
            btnLoading.style.display = 'inline-flex';
        }
        hideFormStatus();

        try {
            // Sanitize inputs before submission
            const formData = new FormData();
            formData.append('name', sanitizeInput(nameValue));
            formData.append('email', sanitizeInput(emailValue));
            formData.append('subject', sanitizeInput(subjectValue));
            formData.append('message', sanitizeInput(messageValue));

            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showFormStatus('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
                contactForm.reset();

                if (messageCount) {
                    messageCount.textContent = '0';
                }

                // Clear all validation states
                [nameField, emailField, subjectField, messageField].forEach(field => {
                    if (field) clearValidation(field);
                });

                // Store submission timestamp
                localStorage.setItem('lastFormSubmission', now.toString());
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            showFormStatus('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            // Reset button state
            if (submitBtn) {
                submitBtn.disabled = false;
            }
            if (btnText) {
                btnText.style.display = 'inline';
            }
            if (btnLoading) {
                btnLoading.style.display = 'none';
            }
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for consultation CTA
document.addEventListener('click', function(e) {
    if (e.target.matches('.consultation-btn')) {
        e.preventDefault();
        const targetElement = document.getElementById('contact');
        if (targetElement) {
            const headerHeight = 64;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Add loading animation to buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary:not(.submit-btn)')) {
        const btn = e.target;
        btn.style.transform = 'scale(0.98)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 100);
    }
});

// Intersection Observer for animations
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.skill-card, .service-card, .project-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}