// Simple fade-in animation for awards section
const awardsSection = document.querySelector('.awards-section');
const awardCards = document.querySelectorAll('.award-card');

function revealAwards() {
  const triggerBottom = window.innerHeight - 100;
  const sectionTop = awardsSection.getBoundingClientRect().top;

  if(sectionTop < triggerBottom) {
    awardCards.forEach((card, index) => {
      card.style.transition = `transform 0.5s ease ${index * 0.2}s, opacity 0.5s ease ${index * 0.2}s`;
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    });
    window.removeEventListener('scroll', revealAwards);
  }
}

// Initial state
awardCards.forEach(card => {
  card.style.transform = 'translateY(50px)';
  card.style.opacity = '0';
});

window.addEventListener('scroll', revealAwards);
window.addEventListener('load', revealAwards);
