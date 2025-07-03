const transitionOverlay = document.querySelector('.transition-overlay');
const links = document.querySelectorAll('a'); // All links on the page

links.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // Make sure it's an internal link
    if (href && !href.startsWith('#') && !href.startsWith('http')) {
      e.preventDefault();

      // Show the overlay
      transitionOverlay.classList.remove('hidden');
      transitionOverlay.classList.add('active');

      // Navigate after short delay
      setTimeout(() => {
        window.location.href = href;
      }, 800); // adjust timing to match fade effect
    }
  });
});