// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get all sections on the page for scroll tracking
    const sections = document.querySelectorAll('section');
    // Get all navigation links for active state management
    const navLinks = document.querySelectorAll('.nav-links a');
    // Get the mobile menu button element
    const menuBtn = document.getElementById('mobileMenuBtn');
    // Get the navigation links container for mobile menu toggle
    const navLinksContainer = document.getElementById('navLinks');

    // Mobile menu toggle functionality
    menuBtn.addEventListener('click', function() {
        // Toggle the 'active' class to show/hide the mobile navigation menu
        navLinksContainer.classList.toggle('active');
        // Change the menu icon when opened/closed (hamburger ☰ to close ✕)
        this.textContent = navLinksContainer.classList.contains('active') ? '✕' : '☰';
    });

    // Add scroll event listener for navigation highlighting
    window.addEventListener('scroll', function() {
        // Variable to store the currently active section ID
        let current = '';

        // Loop through all sections to determine which one is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the section is in the viewport (with 200px offset for better UX)
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        // Update navigation links to highlight the active section
        navLinks.forEach(link => {
            // Remove active class from all links
            link.classList.remove('active');
            // Add active class to the link that matches the current section
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Handle navigation clicks for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor link behavior
            e.preventDefault();

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Smooth scroll to the target section with offset for fixed header
            window.scrollTo({
                top: targetSection.offsetTop - 80, // 80px offset to account for fixed header
                behavior: 'smooth'
            });

            // Close mobile menu if open (on mobile devices)
            if (window.innerWidth < 768) {
                navLinksContainer.classList.remove('active');
                menuBtn.textContent = '☰'; // Reset to hamburger icon
            }
        });
    });

    // Contact Form Validation and Security
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
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
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        // Show success state
        function showSuccess(field) {
            const formGroup = field.closest('.form-group');
            const errorElement = formGroup.querySelector('.error-message');
            formGroup.classList.remove('error');
            formGroup.classList.add('success');
            errorElement.style.display = 'none';
        }

        // Clear validation state
        function clearValidation(field) {
            const formGroup = field.closest('.form-group');
            const errorElement = formGroup.querySelector('.error-message');
            formGroup.classList.remove('error', 'success');
            errorElement.style.display = 'none';
        }

        // Real-time validation
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

        messageField.addEventListener('input', function() {
            const value = this.value.trim();
            const count = value.length;
            messageCount.textContent = count;

            // Update character count styling
            const countElement = messageCount.closest('.character-count');
            countElement.classList.remove('warning', 'danger');

            if (count > 4500) {
                countElement.classList.add('danger');
            } else if (count > 4000) {
                countElement.classList.add('warning');
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

        // Form submission handling
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validate all fields
            let isValid = true;

            // Name validation
            const nameValue = nameField.value.trim();
            if (!nameValue) {
                showError(nameField, 'Name is required');
                isValid = false;
            } else if (!isValidName(nameValue)) {
                showError(nameField, 'Please enter a valid name');
                isValid = false;
            }

            // Email validation
            const emailValue = emailField.value.trim();
            if (!emailValue) {
                showError(emailField, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(emailValue)) {
                showError(emailField, 'Please enter a valid email address');
                isValid = false;
            }

            // Subject validation
            const subjectValue = subjectField.value.trim();
            if (!subjectValue) {
                showError(subjectField, 'Subject is required');
                isValid = false;
            } else if (subjectValue.length < 5 || subjectValue.length > 200) {
                showError(subjectField, 'Subject must be 5-200 characters long');
                isValid = false;
            }

            // Message validation
            const messageValue = messageField.value.trim();
            if (!messageValue) {
                showError(messageField, 'Message is required');
                isValid = false;
            } else if (messageValue.length < 10 || messageValue.length > 5000) {
                showError(messageField, 'Message must be 10-5000 characters long');
                isValid = false;
            }

            // Rate limiting check (simple client-side check)
            const lastSubmission = localStorage.getItem('lastFormSubmission');
            const now = Date.now();
            if (lastSubmission && (now - parseInt(lastSubmission)) < 60000) { // 1 minute
                showFormStatus('Please wait at least 1 minute between submissions.', 'error');
                return;
            }

            if (!isValid) {
                showFormStatus('Please correct the errors above.', 'error');
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
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
                    messageCount.textContent = '0';

                    // Clear all validation states
                    [nameField, emailField, subjectField, messageField].forEach(field => {
                        clearValidation(field);
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
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            }
        });

        // Form status display functions
        function showFormStatus(message, type) {
            formStatus.textContent = message;
            formStatus.className = type;
            formStatus.style.display = 'block';
        }

        function hideFormStatus() {
            formStatus.style.display = 'none';
        }
    }
});