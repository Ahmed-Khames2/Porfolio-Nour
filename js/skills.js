document.addEventListener("DOMContentLoaded", () => {
  const skillsContent = document.getElementsByClassName('skills__content');
  const skillsHeader = document.querySelectorAll('.skills__header');

  // toggle open/close
  function toggleSkills() {
    const itemClass = this.parentNode.classList.contains('skills__open')
      ? 'skills__close'
      : 'skills__open';

    Array.from(skillsContent).forEach(item => item.classList.remove('skills__open'));
    Array.from(skillsContent).forEach(item => item.classList.add('skills__close'));
    this.parentNode.classList.remove('skills__close');
    this.parentNode.classList.add(itemClass);

    // animate bars
    if (itemClass === 'skills__open') {
      const bars = this.parentNode.querySelectorAll('.skills__percentage');
      bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    } else {
      const bars = this.parentNode.querySelectorAll('.skills__percentage');
      bars.forEach(bar => (bar.style.width = '0'));
    }
  }

  skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills);
  });
});
