/* eslint-disable import/extensions */
import contents from './contents.js';

// ---------------------- Failed to fetch
function notFound() {
  const parsedData = {
    Status: 'Failure',
    data: {
      city: 'Not Found',
      description: 'Not Found',
      icon: 'Not Found',
      temperature: 'Not Found',
      humidity: 'Not Found',
      pressure: 'Not Found',
      timezone: 'Not Found',
      date: 'Not Found',
      sunrise: 'Not Found',
      sunset: 'Not Found',
    },
  };

  return parsedData;
}

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
function error(err) {
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
