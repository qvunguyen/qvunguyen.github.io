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
});