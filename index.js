const http = require("http")
const { API_WEATHER_KEY, city } = require('./config.js')
const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = (api, city) => {
  const url = `http://api.weatherstack.com/current?access_key=${api}&query=${city}`
  http.get(url, res => {
    const { statusCode } = res
    if (statusCode !== 200) {
      console.log('statusCode', statusCode);
      return
    }
    rowData = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => rowData += chunk)
    res.on('end', () => {
      let parseData = JSON.parse(rowData)
      console.log(parseData);
    })
  }).on('error', (err) => {
    console.log(err);
  })
}

rl.question("Введите название города, чтобы узнать погоду - ")
  .then((cityName) => {
    getWeather(API_WEATHER_KEY, cityName)
    rl.close();
  })