'use strict';

const toggle = document.querySelector('.toggle-bar');
const navItems = document.querySelector('.nav-item');

toggle.addEventListener('click', function (e) {
  e.preventDefault();
  navItems.classList.toggle('hidden');
});
