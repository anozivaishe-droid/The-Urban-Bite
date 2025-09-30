// Toggle navigation menu on small screens
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('main-nav');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  });
  