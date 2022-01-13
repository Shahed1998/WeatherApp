const axios = require('axios');

exports.renderHome = (req, res) => {
  res.status(200).render('home');
};

exports.getData = async (req, res) => {
  try {
    const { cityName } = req.body;
    console.log(cityName);
    const apiData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.API_KEY}`
    );
    res.status(200).json({
      Status: 'Success',
      data: {
        city: apiData.data.name,
        description: apiData.data.weather[0].description,
        icon: apiData.data.weather[0].icon,
        temperature: apiData.data.main.temp,
        humidity: apiData.data.main.humidity,
        pressure: apiData.data.main.pressure,
        timezone: apiData.data.timezone,
        date: apiData.data.dt,
        sunrise: apiData.data.sys.sunrise,
        sunset: apiData.data.sys.sunset,
      },
    });
  } catch (err) {
    res.status(404).json({
      Status: 'Failure',
      data: null,
    });
  }
};

exports.getDataGeo = async (req, res) => {
  try {
    const latitude = Number(req.params.lat);
    const longitude = Number(req.params.lon);
    const apiData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.API_KEY}`
    );
    res.status(200).json({
      Status: 'Success',
      data: {
        city: apiData.data.name,
        description: apiData.data.weather[0].description,
        icon: apiData.data.weather[0].icon,
        temperature: apiData.data.main.temp,
        humidity: apiData.data.main.humidity,
        pressure: apiData.data.main.pressure,
        timezone: apiData.data.timezone,
        date: apiData.data.dt,
        sunrise: apiData.data.sys.sunrise,
        sunset: apiData.data.sys.sunset,
      },
    });
  } catch (err) {
    res.status(404).json({
      Status: 'Failure',
      data: null,
    });
  }
};
