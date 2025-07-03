const logoOverlay = document.querySelector('.logo-overlay');
const logoImg = document.querySelector('.logo-overlay img');
const mainContent = document.querySelector('.main-content');
const previewGrid = document.querySelector('.preview-gallery');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Show logo overlay
  if (scrollY > 50) {
    logoOverlay.classList.remove('hidden');
  } else {
    logoOverlay.classList.add('hidden');
    logoImg.style.transform = `scale(1)`;
    logoImg.style.filter = `blur(0px)`;
    previewGrid.style.filter = `blur(0px)`;
  }

  // Zoom & blur logo
  if (scrollY > 200) {
    const progress = Math.min((scrollY - 200) / 300, 1);
    logoImg.style.transform = `scale(${1 + progress})`;
    logoImg.style.filter = `blur(${progress * 10}px)`;
    previewGrid.style.filter = `blur(${progress * 3}px)`;
  }

  // Reveal main content
  if (scrollY > 600) {
    mainContent.classList.add('visible');
  }

});

  const reviews = document.querySelectorAll('.review-bubble');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let current = 0;

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % reviews.length;
    showReview(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + reviews.length) % reviews.length;
    showReview(current);
  });

  // Initialize
  showReview(current);
