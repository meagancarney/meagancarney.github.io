/* ============================================
   Dr. Meagan Carney — Site JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      const isOpen = body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('nav-open')) {
        body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // --- Active Navigation Highlighting ---
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    link.classList.remove('active');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // --- Scroll Fade-In Animations ---
  var fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

});
