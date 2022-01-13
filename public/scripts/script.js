/* eslint-disable import/extensions */
import contents, { notFound } from './contents.js';
import geoLocation from './geolocation.js';

// IIFE
(() => {
  geoLocation();
})();

// ------------------------------- Button click
const cityButton = document.querySelector('#cityButton');
cityButton.addEventListener('click', () => {
  (async () => {
    const cityName = document.querySelector('.city').value;

    if (cityName.length !== 0) {
      try {
        const response = await fetch('/', {
          method: 'POST',
          body: JSON.stringify({ cityName }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const data = await response.text();
          const parsedData = JSON.parse(data);
          // Contents
          contents(parsedData);
        } else {
          const parsedData = notFound();
          contents(parsedData);
        }
      } catch (err) {
        const parsedData = notFound();
        contents(parsedData);
      }
    } else {
      geoLocation();
    }
  })();
});

// ------------------------------- Empty
const cityName = document.querySelector('.city');
cityName.addEventListener('keyup', () => {
  if (cityName.value.length === 0) {
    geoLocation();
  }
});
