// ===== Wait for DOM to be ready =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio site loaded successfully!');

    // ===== Smooth Scrolling for Navigation Links =====
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

    // ===== Category Filtering System =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    console.log(`Total projects: ${projectCards.length}`);

    // Set initial state for all projects to be visible
    projectCards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get the selected category
            const selectedCategory = button.getAttribute('data-category');

            // Filter projects
            filterProjects(selectedCategory, projectCards);
        });
    });

    function filterProjects(category, projectCards) {
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                // Show matching cards with fade-in animation
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                // Hide non-matching cards
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        console.log(`Filtered to category: ${category}`);
    }

    // ===== Navbar Background on Scroll =====
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('header');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    });

    // ===== Active Navigation Link on Scroll =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
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

    // ===== Keyboard Navigation Support =====
    filterButtons.forEach((button, index) => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }

            // Arrow key navigation
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextButton = filterButtons[index + 1] || filterButtons[0];
                nextButton.focus();
            }

            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevButton = filterButtons[index - 1] || filterButtons[filterButtons.length - 1];
                prevButton.focus();
            }
        });
    });

    // ===== Dynamic Project Stats =====
    function getProjectStats() {
        const stats = {
            total: projectCards.length,
            categories: {}
        };

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            stats.categories[category] = (stats.categories[category] || 0) + 1;
        });

        return stats;
    }

    // Log project statistics
    const stats = getProjectStats();
    console.log('Project Statistics:', stats);
});
