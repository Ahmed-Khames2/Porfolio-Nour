// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => { navLinks.classList.toggle('show'); });

// Dark/Light Mode
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = modeToggle.querySelector('i');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // تغيير شكل الأيقونة
  if(document.body.classList.contains('dark-mode')){
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
  } else {
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
  }
});

// Smooth Scroll
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
  });
});
// Active Navbar Link on Scroll
const sectionsAll = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sectionsAll.forEach(section => {
    const sectionTop = section.offsetTop - 80; // ناخد الهامش تحت Navbar
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight){
      current = section.getAttribute('id');
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`){
      link.classList.add('active');
    }
  });
});
