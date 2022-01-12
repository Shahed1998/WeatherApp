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

  // Date
  const unixTimeStamp = parsedData.data.date;
  const date = new Date(unixTimeStamp * 1000);
  document.querySelector('.date').textContent = `${date}`;
}
