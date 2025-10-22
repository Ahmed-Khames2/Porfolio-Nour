const slider = document.querySelector('.hero-slider');
let position = 0;

function animateSlider() {
  position -= 0.2; // سرعة التحريك
  if(position <= -50) position = 0; // إعادة التحريك
  slider.style.transform = `translateX(${position}%)`;
  requestAnimationFrame(animateSlider);
}

animateSlider();
