// Contents
function contents(parsedData) {
  document.querySelector('.loc').textContent = parsedData.data.city;
  document.querySelector('.wc').textContent = parsedData.data.description;
  document.querySelector(
    '.temp'
  ).textContent = `${parsedData.data.temperature} degree celsius`;
  document.querySelector(
    '.humid'
  ).textContent = `${parsedData.data.humidity} %`;

  // Date
  const unixTimeStamp = parsedData.data.date;
  const date = new Date(unixTimeStamp * 1000);
  //   console.log(date.);
  document.querySelector('.date').textContent = `${date}`;
}

// -------------------------------- Geolocation
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
      //   console.log(parsedData);
    } else {
      console.log('Unable to fetch data');
    }
  } catch (err) {
    console.log(err);
  }
}

function error(err) {
  console.log(err.message);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error, {
    maximumAge: 0,
    enableHighAccuracy: true,
  });
}

(() => {
  getLocation();
})();
