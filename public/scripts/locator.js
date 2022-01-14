/* eslint-disable import/extensions */
import contents, { notFound } from './contents.js';

// ----------------------- Success
async function success(position) {
  try {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const response = await fetch(`/geo/${lat}/${lon}`);
    if (response.status === 200) {
      const dataObj = await response.text();
      const parsedData = JSON.parse(dataObj);

      // Contents
      contents(parsedData);
    } else {
      //   console.log('Unable to fetch data');
      const parsedData = notFound();
      contents(parsedData);
    }
  } catch (err) {
    const parsedData = notFound();
    contents(parsedData);
  }
}

// ----------------------- Error
function error() {
  const parsedData = notFound();
  contents(parsedData);
}

// ----------------------- Location
export default function geoLocation() {
  navigator.geolocation.getCurrentPosition(success, error, {
    maximumAge: 0,
    enableHighAccuracy: true,
  });
}

// ----------------------  Fetch data according to cities
export async function cityFetch() {
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
}
