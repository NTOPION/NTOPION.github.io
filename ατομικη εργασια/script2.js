document.addEventListener('DOMContentLoaded', () => {
  const fadeSections = document.querySelectorAll('.fade-in-section');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Trigger animation only if scrolling down into the element
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);  // Stop observing once animated
      }
    });
  }, observerOptions);

  fadeSections.forEach(section => {
    observer.observe(section);
  });
});
