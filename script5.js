
  function fadeInOnScroll() {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('load', fadeInOnScroll);