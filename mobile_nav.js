/**
 * mobile_nav.js
 * Handles the mobile sidebar toggle for the technikboerse documentation portal.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobile-toggle');
  
  if (!toggleBtn) {
    return;
  }

  // Create backdrop element and append to body
  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-backdrop';
  document.body.appendChild(backdrop);

  const toggleSidebar = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const isOpen = document.body.classList.toggle('sidebar-open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggleSidebar);
  backdrop.addEventListener('click', toggleSidebar);

  // Close sidebar when a navigation link is clicked (important for anchor links)
  const aside = document.querySelector('aside');
  if (aside) {
    const navLinks = aside.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (document.body.classList.contains('sidebar-open')) {
          toggleSidebar();
        }
      });
    });
  }
});
