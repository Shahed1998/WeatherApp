/* eslint-disable operator-linebreak */
// ----------------------- Contents
export default function contents(parsedData) {
  document.querySelector('.loc').textContent = parsedData.data.city;
  document.querySelector('.wc').textContent = parsedData.data.description;
  document.querySelector(
    '.temp'
  ).textContent = `${parsedData.data.temperature} degree celsius`;
  document.querySelector(
    '.humid'
  ).textContent = `${parsedData.data.humidity} %`;

  // ----------------------------- Date
  // Obtain current local time
  // Find local time offset
  // Obtain current UTC time
  // Obtain destination city's offset in hours and convert to milliseconds
  // Convert to readable format
  if (parsedData.data.timezone === null) {
    document.querySelector('.date').innerHTML = `
  Not found`;
  } else {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const city = utc + 1000 * parsedData.data.timezone;
    const nd = new Date(city);
    let hours = nd.getHours();
    let meridiem = 'am';

    if (hours >= 12) {
      hours -= 12;
      meridiem = 'pm';
    }

    document.querySelector('.date').innerHTML = `
    ${hours}: ${nd.getMinutes()} ${meridiem}<br/> ${nd.toDateString()}`;
  }
}

// ---------------------- Failed to fetch
export function notFound() {
  const parsedData = {
    Status: 'Failure',
    data: {
      city: 'Not Found',
      description: 'Not Found',
      icon: 'Not Found',
      temperature: 'Not Found',
      humidity: 'Not Found',
      pressure: 'Not Found',
      timezone: null,
      date: 'Not Found',
      sunrise: 'Not Found',
      sunset: 'Not Found',
    },
  };

  return parsedData;
}
