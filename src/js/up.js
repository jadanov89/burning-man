window.addEventListener('scroll', function() {
    const pageup = document.querySelector('.pageup');
    if (window.pageYOffset > 500) {
        pageup.style.display = 'block';
    } else {
        pageup.style.display = 'none';
    }
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = link.getAttribute('href').substring(1);
      const target = document.getElementById(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  