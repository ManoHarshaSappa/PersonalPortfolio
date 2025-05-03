// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Optional: Active nav link highlighting
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollY = window.pageYOffset;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute('id');
  
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.navbar a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === id) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
  // Optional: Show/Hide contact section button (if you add a toggle)
  const contactToggle = document.getElementById('contact-toggle');
  if (contactToggle) {
    contactToggle.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      contactSection.style.display =
        contactSection.style.display === 'none' ? 'block' : 'none';
    });
  }
  