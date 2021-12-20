'use strict';

const { async } = require('regenerator-runtime');

const toggle = document.querySelector('.toggle-bar');
const navItems = document.querySelector('.nav-links');

toggle.addEventListener('click', function (e) {
  e.preventDefault();
  navItems.classList.toggle('hidden');

  if (navItems.classList.contains('hidden')) {
    navItems.style.height = '0vh';
    navItems.style.overflow = 'hidden';
  } else {
    navItems.style.height = '20vh';
    navItems.style.overflow = 'visible';
  }
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

////////////////////////////////////////////////////////////////

// Form submit

// const form = document.getElementById('my-form');
// const btnsubmit = document.querySelector('.btnsubmit');

// const sendData = async function () {
//   const rec = await fetch('https://formspree.io/f/xlezeoyo'), {
//     Method: 'Post', {

//     }
//   }
//   console.log(rec);

// };

// sendData();
