
 const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
      });
    });


function filterMenu(category) {
    let items = document.querySelectorAll('#menuItems .menu-card');
    items.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }