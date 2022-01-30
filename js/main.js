'use strict';

// const { async } = require('regenerator-runtime');

const toogle = document.querySelector('.toogle');
const navItems = document.querySelector('.nav-items');
// const animation = document.querySelector('nav');

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

// Active Bar movement
const tabs = document.querySelectorAll('.items');
const nav = document.querySelector('.nav');

nav.addEventListener('click', function (e) {
  const clicked = e.target.closest('.items');
  // console.log(clicked);
  if (!clicked) return;

  tabs.forEach(el => el.classList.remove('nav--items_active'));

  clicked.classList.add('nav--items_active');
});

//For showing the active bar and container
//For container we just need the data-set

const section = document.querySelector('.nav--content');
// const nav = document.querySelector('.container');
const header = document.querySelector('.section');

const getHeight = section.getBoundingClientRect().height;
// console.log(getHeight);

const scrollView = function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) section.classList.add('sticky-color');
    else section.classList.remove('sticky-color');
  });
};

const observerAPI = new IntersectionObserver(scrollView, {
  root: null,
  threshold: 0,
  rootMargin: `-${getHeight}px`,
});

observerAPI.observe(header);

// animation for section--3

const section3 = document.querySelector('.section--anim_1');

const sectionview = function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) section3.classList.add('container-animation');
    else section3.classList.remove('container-animation');
  });
};

const sectionThObserver = new IntersectionObserver(sectionview, {
  root: null,
  threshold: 0.8,
});

sectionThObserver.observe(header);
