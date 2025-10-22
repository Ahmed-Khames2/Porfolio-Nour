// لو عايز تضيف اي انيميشن عند الدخول للسيكشن
const workCards = document.querySelectorAll('.work-card');

function animateWorks() {
  workCards.forEach((card, index) => {
    card.style.transition = `transform 0.5s ease ${index * 0.2}s, opacity 0.5s ease ${index * 0.2}s`;
    card.style.transform = 'translateY(0)';
    card.style.opacity = '1';
  });
}

function checkWorksInView() {
  const triggerBottom = window.innerHeight - 100;
  const worksTop = document.querySelector('.works-section').getBoundingClientRect().top;

  if(worksTop < triggerBottom) {
    animateWorks();
    window.removeEventListener('scroll', checkWorksInView);
  }
}

window.addEventListener('scroll', checkWorksInView);
window.addEventListener('load', checkWorksInView);
