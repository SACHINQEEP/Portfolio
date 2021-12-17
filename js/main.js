'use strict';

const toggle = document.querySelector('.toggle-bar');
const navItems = document.querySelector('.nav-items');

toggle.addEventListener('click', function (e) {
  e.preventDefault();
  navItems.classList.toggle('hidden');
});

// Smooth Scrolling

const smooth = document.querySelector('.nav-links');

smooth.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
