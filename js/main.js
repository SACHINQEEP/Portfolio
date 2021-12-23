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
  // console.log(e.target);

  if (e.target.classList.contains('items')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////////

//For showing the active bar and container
//For container we just need the data-set

const tapContent = document.querySelector('.nav');
const tap = document.querySelectorAll('.items');

tapContent.addEventListener('click', function (e) {
  const clicked = e.target.closest('.items');
  console.log(clicked);

  if (!clicked) return;

  tap.forEach(t => t.classList.remove('nav--items_active'));

  clicked.classList.add('nav--items_active');
});

///////////////////////////////////////////////////////////////////////////////

const section = document.querySelectorAll('.bg-light');
console.log(section);
// const nav = document.querySelector('.content');

// const navBarSection = section.getBoundingClientRect().height;
// console.log(navBarSection);

const stickyNav = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky-color');
    } else nav.classList.remove('sticky-color');
  });
};

console.log(stickyNav);

const object = {
  root: null,
  threshold: 0,
  // rootMargin: `-${navBarSection}px`,
};

console.log(object);

const observerAPI = new IntersectionObserver(stickyNav, object);
console.log(observerAPI);

observerAPI.observe(section);
