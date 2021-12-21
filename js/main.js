'use strict';

const { async } = require('regenerator-runtime');

const toogle = document.querySelector('.toogle');
const navItems = document.querySelector('.nav-items');
const animation = document.querySelector('nav');

toogle.addEventListener('click', function (e) {
  e.preventDefault();

  if (navItems.classList.contains('hidden')) {
    navItems.classList.remove('hidden');
    navItems.style.maxHeight = navItems.scrollHeight + 'vh';
  } else {
    navItems.removeAttribute('style');
    navItems.classList.add('hidden');
  }
});

// Smooth Scrolling

// const smooth = document.querySelector('.nav-items');

navItems.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains('items')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////////
