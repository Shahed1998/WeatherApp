/* eslint-disable import/extensions */
import geoLocation, { cityFetch } from './locator.js';

// ------------------------------- variable declarations
const cityButton = document.querySelector('#cityButton');
const cityName = document.querySelector('.city');

// IIFE (Immediately Invoked Function Expression)
(() => {
  geoLocation();
})();

// ------------------------------- Events
cityButton.addEventListener('click', () => cityFetch());

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    cityFetch();
  }
});

// ------------------------------- Empty
cityName.addEventListener('keyup', () => {
  if (cityName.value.length === 0) {
    geoLocation();
  }
});
