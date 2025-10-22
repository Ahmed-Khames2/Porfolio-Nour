const skillCards = document.querySelectorAll('.skill-card');

function animateSkills() {
  skillCards.forEach(card => {
    const progress = card.querySelector('.progress');
    const value = card.querySelector('.progress-value');
    const targetWidth = progress.getAttribute('data-progress');

    let width = 0;
    const interval = setInterval(() => {
      if(width >= parseInt(targetWidth)) {
        clearInterval(interval);
      } else {
        width++;
        progress.style.width = width + '%';
        value.textContent = width + '%';
      }
    }, 15);
  });
}

// تحقق لو السيكشن ظهر على الشاشة
function checkSkillsInView() {
  const triggerBottom = window.innerHeight - 100;
  const skillsTop = document.querySelector('.skills-section').getBoundingClientRect().top;

  if(skillsTop < triggerBottom) {
    animateSkills();
    window.removeEventListener('scroll', checkSkillsInView);
  }
}

window.addEventListener('scroll', checkSkillsInView);
window.addEventListener('load', checkSkillsInView);
