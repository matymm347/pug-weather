<h1>Pug Weather</h1>
Weather website project powered by weatherapi.com.
<p></p>
<h1>Current functionalities</h1>

For a given city show:
<ul>
  <li>Current and two next days temperature forecast</li>
  <li>Sunrise and sunset</li>
  <li>Weather description (Sunny, Foggy etc.)</li>
  <li>Precipation probability for next 7 hours</li>
</ul>

<h1>How to build</h1>
To install all dependencies simply use npm install.
Project is using API key to request weather data from Weather Api.
To properly build project you will need to create '.env' file in the root folder and add your own API key inside:
<p></p>

```dosini
WEATHER_API_KEY="your_api_key_here"
```
Important - app is working only with Weather API.
Weather API is offering free tier up to 1MLN calls per month.
Feel free to sign up for your key under: <a href="https://www.weatherapi.com/">Weather API</a>
