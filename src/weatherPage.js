import { setUpHomePage } from "./homePage";
import Chart from "chart.js/auto";
import backIconSvg from "./graphics/back-svgrepo-com.svg";
import leftIconSvg from "./graphics/left-svgrepo-com.svg";
import rightIconSvg from "./graphics/right-svgrepo-com.svg";
import sunSetSvg from "./graphics/weather-icons-34-svgrepo-com.svg";
import sunRiseSvg from "./graphics/weather-icons-35-svgrepo-com.svg";
import locationSvg from "./graphics/location-svgrepo-com.svg";
import pugSVG from "./graphics/pug-svgrepo-com.svg";
import humiditySvg from "./graphics/humidity-svgrepo-com.svg";
import windArch from "./graphics/windSemiCircle.svg";

class TempSwitch {
  constructor() {
    this.tempSwitchGrid = document.createElement("div");
    this.tempSwitchGrid.id = "temp-switch-grid";

    this.celsiusText = document.createElement("div");
    this.celsiusText.textContent = "°C";
    this.celsiusText.className = "temp-switch-unit-text";
    this.tempSwitchGrid.appendChild(this.celsiusText);

    this.currentTempCircle = document.createElement("div");
    this.currentTempCircle.id = "temp-switch-circle";
    this.tempSwitchGrid.appendChild(this.currentTempCircle);

    this.backgroundBar = document.createElement("div");
    this.backgroundBar.id = "temp-switch-background-bar";
    this.tempSwitchGrid.appendChild(this.backgroundBar);

    this.farenheitText = document.createElement("div");
    this.farenheitText.textContent = "°F";
    this.farenheitText.className = "temp-switch-unit-text";
    this.tempSwitchGrid.appendChild(this.farenheitText);
  }

  get domGrid() {
    return this.tempSwitchGrid;
  }

  switchTemp(unit) {
    switch (unit) {
      case "celcius":
        this.currentTempCircle.style.gridColumn = "2";
        break;
      case "farenheit":
        this.currentTempCircle.style.gridColumn = "3";
    }
  }
}

class DaySwitchMarker {
  constructor() {
    this.switchContainer = document.createElement("div");
    this.switchContainer.id = "switch-container";

    this.currentPositionElement = document.createElement("div");
    this.currentPositionElement.id = "current-position-element";
    this.currentPositionElement.className = "switch-element";
    this.currentPositionElement.style.order = 0;
    this.switchContainer.appendChild(this.currentPositionElement);

    this.backgroundPositionElement1 = document.createElement("div");
    this.backgroundPositionElement1.style.order = "1";
    this.backgroundPositionElement1.className =
      "switch-background-element switch-element";
    this.switchContainer.appendChild(this.backgroundPositionElement1);
    this.backgroundPositionElement2 = document.createElement("div");
    this.backgroundPositionElement2.style.order = "3";
    this.backgroundPositionElement2.className =
      "switch-background-element switch-element";
    this.switchContainer.appendChild(this.backgroundPositionElement2);
  }

  get domGrid() {
    return this.switchContainer;
  }

  switchDay(daynr) {
    switch (daynr) {
      case 0:
        this.currentPositionElement.style.order = 0;
        break;
      case 1:
        this.currentPositionElement.style.order = 2;
        break;
      case 2:
        this.currentPositionElement.style.order = 4;
        break;
      case 3:
        this.currentPositionElement.style.order = 6;
        break;
    }
  }
}

class BackButton {
  constructor() {
    this.backButtonArea = document.createElement("div");
    this.backButtonArea.id = "back-button-area";

    this.backButton = document.createElement("img");
    this.backButton.src = backIconSvg;
    this.backButton.id = "back-button";
    this.backButton.alt = "back";
    this.backButtonArea.appendChild(this.backButton);

    this.backButtonArea.addEventListener("click", () => setUpHomePage());
  }

  get domGroup() {
    return this.backButtonArea;
  }
}

class TopNowCardRow {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "top-now-card-grid";
    this.container.style.gridTemplateColumns = "1fr 1fr 1fr";
    this.container.style.direction = "row";

    this.backbutton = new BackButton();
    this.daySwitchMarker = new DaySwitchMarker();
    this.tempSwitch = new TempSwitch();

    this.container.appendChild(this.backbutton.domGroup);
    this.container.appendChild(this.daySwitchMarker.domGrid);
    this.container.appendChild(this.tempSwitch.domGrid);
  }

  get domGrid() {
    return this.container;
  }
}

class CityRow {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "city-row-grid";

    this.location = document.createElement("div");
    this.location.className = "city-row-elements";
    this.location.id = "city-row-location";
    this.locationIcon = document.createElement("img");
    this.locationIcon.id = "location-icon";
    this.locationIcon.src = locationSvg;
    this.cityName = document.createElement("div");
    this.cityName.style.fontWeight = "bold";
    this.cityName.style.fontSize = "18px";
    this.updateLocation(
      apiResponse.location.name,
      apiResponse.location.country
    );
    this.location.appendChild(this.locationIcon);
    this.location.appendChild(this.cityName);

    this.sunRise = document.createElement("div");
    this.sunRise.className = "city-row-elements sun-set-rise-elements";
    this.sunRiseHour = document.createElement("div");
    this.sunRiseHour.textContent = "n/n";
    this.updateSunRiseHour(0, apiResponse);
    this.sunRiseIcon = document.createElement("img");
    this.sunRiseIcon.src = sunRiseSvg;
    this.sunRiseIcon.className = "sun-rise-set-icon";
    this.sunRise.appendChild(this.sunRiseHour);
    this.sunRise.appendChild(this.sunRiseIcon);

    this.sunSet = document.createElement("div");
    this.sunSet.className = "city-row-elements sun-set-rise-elements";
    this.sunSetHour = document.createElement("div");
    this.sunSetHour.textContent = "n/n";
    this.updateSunSetHour(0, apiResponse);
    this.sunSetIcon = document.createElement("img");
    this.sunSetIcon.src = sunSetSvg;
    this.sunSetIcon.className = "sun-rise-set-icon";
    this.sunSet.appendChild(this.sunSetHour);
    this.sunSet.appendChild(this.sunSetIcon);

    this.date = document.createElement("div");
    this.date.id = "city-row-date";
    this.date.className = "city-row-elements";
    this.changeDate(0, apiResponse);

    this.container.appendChild(this.location);
    this.container.appendChild(this.sunRise);
    this.container.appendChild(this.date);
    this.container.appendChild(this.sunSet);
  }

  get domGrid() {
    return this.container;
  }

  changeDate(daynr, apiResponse) {
    const monthAbbr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentMnth =
      monthAbbr[
        new Date(apiResponse.forecast.forecastday[daynr].date).getMonth()
      ];

    if (daynr === 0) {
      this.date.textContent = `Today ${new Date(
        apiResponse.forecast.forecastday[0].date
      ).getDate()} ${currentMnth}`;
    } else {
      this.date.textContent = `${new Date(
        apiResponse.forecast.forecastday[daynr].date
      ).getDate()} ${currentMnth}`;
    }
  }

  updateLocation(city, country) {
    this.cityName.textContent = city + ", " + country;
  }

  updateSunRiseHour(daynr, apiResponse) {
    this.sunRiseHour.textContent =
      apiResponse.forecast.forecastday[daynr].astro.sunrise;
  }

  updateSunSetHour(daynr, apiResponse) {
    this.sunSetHour.textContent =
      apiResponse.forecast.forecastday[daynr].astro.sunset;
  }
}

class TemperatureRow {
  constructor(apiResponse) {
    this.tempRow = document.createElement("div");
    this.tempRow.id = "temp-row";

    this.currentTemp = document.createElement("div");
    this.currentTemp.id = "current-temp";
    this.updateTemp(0, apiResponse);

    this.leftButton = document.createElement("div");
    this.leftButton.className = "temp-button";
    this.leftButton.id = "temp-row-button-left";
    this.leftArrow = document.createElement("div");
    this.leftArrow.className = "temp-row-arrow";
    this.leftButton.appendChild(this.leftArrow);

    this.rightButton = document.createElement("div");
    this.rightButton.className = "temp-button";
    this.rightButton.id = "temp-row-button-right";
    this.rightArrow = document.createElement("div");
    this.rightArrow.className = "temp-row-arrow";
    this.rightButton.appendChild(this.rightArrow);

    this.tempRow.appendChild(this.leftButton);
    this.tempRow.appendChild(this.currentTemp);
    this.tempRow.appendChild(this.rightButton);
  }

  async setUpArrows() {
    await fetch(leftIconSvg)
      .then((response) => response.text())
      .then((svgText) => {
        this.leftArrow.innerHTML = svgText;
      });

    await fetch(rightIconSvg)
      .then((response) => response.text())
      .then((svgText) => {
        this.rightArrow.innerHTML = svgText;
      });
  }

  updateTemp(daynr, apiResponse) {
    if (daynr === 0) {
      this.currentTemp.textContent =
        Math.round(apiResponse.current.temp_c) + "°";
    } else {
      this.currentTemp.textContent =
        Math.round(apiResponse.forecast.forecastday[daynr].day.maxtemp_c) + "°";
    }
  }

  get domFlex() {
    return this.tempRow;
  }
}

class WeatherDescriptionRow {
  constructor(apiResponse) {
    this.weatherDescDiv = document.createElement("div");
    this.weatherDescDiv.id = "weather-desc-div";

    this.weatherIcon = document.createElement("img");
    this.weatherIcon.src = apiResponse.current.condition.icon;

    this.weatherDescText = document.createElement("a");
    this.weatherDescText.id = "weather-description-row";
    this.weatherDescText.textContent = apiResponse.current.condition.text;

    this.weatherDescDiv.appendChild(this.weatherIcon);
    this.weatherDescDiv.appendChild(this.weatherDescText);
  }

  updateDescription(daynr, apiResponse) {
    if (daynr === 0) {
      this.weatherIcon.src = apiResponse.current.condition.icon;
      this.weatherDescText.textContent = apiResponse.current.condition.text;
    } else {
      this.weatherIcon.src =
        apiResponse.forecast.forecastday[daynr].day.condition.icon;
      let response = apiResponse.forecast.forecastday[daynr].day.condition.text;
      response = response.replace(/\bnearby\b/g, ""); // remove "nearby" word
      this.weatherDescText.textContent = response;
    }
  }
}

class UpcomingHoursChart {
  constructor(apiResponse) {
    this.upcomingHoursContainer = document.createElement("div");
    this.upcomingHoursContainer.id = "upcoming-hours-container";

    this.chart = document.createElement("canvas");
    this.chart.id = "upcoming-hours-chart";
    this.upcomingHoursContainer.appendChild(this.chart);

    let localTime = new Date(apiResponse.location.localtime).getHours();
    let labelsList = [];

    for (let index = 0; index < 8; index++) {
      if (index === 0) {
        labelsList.push(this.fetchLabelData(apiResponse, 0, localTime));
        labelsList[0].time = "Now";
        continue;
      }

      let calcTime = "";

      if (localTime + index > 23) {
        if (localTime + index - 24 == 0) {
          labelsList.push(this.fetchLabelData(apiResponse, 1, 0));
          labelsList[index].time = "00:00";
        } else {
          calcTime = localTime + index - 24;
          labelsList.push(this.fetchLabelData(apiResponse, 1, calcTime));
          labelsList[index].time = `0${localTime + index - 24}:00`;
        }
      } else {
        calcTime = localTime + index;
        labelsList.push(this.fetchLabelData(apiResponse, 0, calcTime));
        labelsList[index].time = localTime + index + ":00";
      }
    }

    this.drawChart = function () {
      let iconPlugin = {
        id: "iconPlugin",
        beforeDraw: function (chart) {
          const { ctx, chartArea } = chart;

          // Draw ticks with images
          labelsList.forEach((label, index) => {
            const x = chart.scales.x.getPixelForValue(index);
            const y = chartArea.top - 85; // Adjust as needed
            const imgSize = 40;

            const img = new Image(imgSize, imgSize);
            img.src = labelsList[index].icon;
            img.onload = function () {
              ctx.drawImage(img, x - img.width / 2, y, img.width, img.height);
            };
          });
        },
      };

      // Make multiline tick with time and precipation to implement for Chart.JS
      let multilineTickList = [];
      for (let index = 0; index < labelsList.length; index++) {
        multilineTickList.push([
          labelsList[index].time,
          labelsList[index].precip + "%",
        ]);
      }

      new Chart(document.getElementById("upcoming-hours-chart"), {
        plugins: [iconPlugin],
        type: "line",
        options: {
          // 17ms delay to prevent dynamic resize draw tick png bug
          resizeDelay: 17,
          animation: false,
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: false,
            },
            customImageTicks: true,
          },
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 40,
            },
          },
          scales: {
            x: {
              position: "top",
              border: {
                display: false,
              },
              grid: {
                lineWidth: 1,
                color: "rgb(0, 0, 0)",
                z: 1,
              },
            },
            y: {
              min: -5,
              display: false,
              grid: {
                display: false,
              },
            },
          },
        },
        data: {
          labels: multilineTickList,
          //labels: labelsList.map((row) => row.time),
          datasets: [
            {
              data: labelsList.map((row) => row.precip),
              pointRadius: 0,
              showLine: false,
              fill: {
                target: "origin",
                above: "rgb(92, 156, 229)",
              },
            },
          ],
        },
      });
    };
  }

  fetchLabelData(apiResponse, day, specificHour) {
    let icon =
      apiResponse.forecast.forecastday[day].hour[specificHour].condition.icon;
    let temp = Math.round(
      apiResponse.forecast.forecastday[day].hour[specificHour].temp_c
    );
    if (temp == -0) {
      temp = 0;
    }
    let precip =
      apiResponse.forecast.forecastday[day].hour[specificHour].chance_of_rain;

    return { time: specificHour, icon, temp, precip };
  }
}

function setUpPugSVG() {
  let pugContainer = document.createElement("div");
  pugContainer.style.overflow = "hidden";
  pugContainer.id = "now-card-pug-container";
  let pugSvgElement = document.createElement("img");
  pugSvgElement.src = pugSVG;
  pugSvgElement.id = "pug-svg-element";

  pugContainer.appendChild(pugSvgElement);
  return pugContainer;
}

async function setUpNowCard(infoGrid, apiResponse) {
  let nowCard = document.createElement("div");
  nowCard.style.gridTemplateRows = "1fr 1fr 1fr 4fr 1fr";
  nowCard.id = "now-card";

  let topRow = new TopNowCardRow();
  let cityRow = new CityRow(apiResponse);
  let tempRow = new TemperatureRow(apiResponse);
  await tempRow.setUpArrows();
  let descRow = new WeatherDescriptionRow(apiResponse);
  let pugSvgElement = setUpPugSVG();

  nowCard.appendChild(topRow.domGrid);
  nowCard.appendChild(cityRow.domGrid);
  nowCard.appendChild(tempRow.domFlex);
  nowCard.appendChild(descRow.weatherDescDiv);
  nowCard.appendChild(pugSvgElement);
  infoGrid.appendChild(nowCard);

  return { topRow, cityRow, tempRow, descRow };
}

function setUpMoreDetailsBanner() {
  let moreDetailsBanner = document.createElement("div");
  moreDetailsBanner.id = "more-details-banner";

  let moreDetailsText = document.createElement("div");
  moreDetailsText.style.fontSize = "20px";
  moreDetailsText.style.fontWeight = "bold";
  moreDetailsText.textContent = "More details of today's weather";
  moreDetailsBanner.appendChild(moreDetailsText);

  return moreDetailsBanner;
}

function setUpWelcomeBanner() {
  let welcomeBanner = document.createElement("div");
  welcomeBanner.id = "welcome-banner";

  let welcomeText = document.createElement("div");
  welcomeText.style.fontSize = "20px";
  welcomeText.style.fontWeight = "bold";
  welcomeText.textContent = "Welcome!";
  let additionalText = document.createElement("div");
  additionalText.textContent = "Check out today's weather information";
  welcomeBanner.appendChild(welcomeText);
  welcomeBanner.appendChild(additionalText);

  return welcomeBanner;
}

class ChanceOfRainIndicator {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "chance-of-rain-indicator";
    this.container.className = "more-details-grid-element";

    let banner = document.createElement("a");
    banner.textContent = "Chance of rain";
    this.container.appendChild(banner);

    let feelsLikeText = document.createElement("a");
    feelsLikeText.id = "chance-of-rain-text";
    feelsLikeText.textContent =
      apiResponse.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    this.container.appendChild(feelsLikeText);
  }

  get domGrid() {
    return this.container;
  }
}

class FeelsLikeIndicator {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "feels-like-indicator";
    this.container.className = "more-details-grid-element";

    let banner = document.createElement("a");
    banner.textContent = "Feels like";
    this.container.appendChild(banner);

    let feelsLikeText = document.createElement("a");
    feelsLikeText.id = "feels-like-text";
    feelsLikeText.textContent = apiResponse.current.feelslike_c + "°";
    this.container.appendChild(feelsLikeText);
  }

  get domGrid() {
    return this.container;
  }
}

class UVIndicator {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "uv-indicator";
    this.container.className = "more-details-grid-element";

    let banner = document.createElement("a");
    banner.textContent = "UV Index";
    this.container.appendChild(banner);

    let uvText = document.createElement("a");
    uvText.id = "uv-text";
    uvText.textContent = apiResponse.current.uv;
    this.container.appendChild(uvText);
  }

  get domGrid() {
    return this.container;
  }
}

class PrecipIndicator {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "precip-indicator";
    this.container.className = "more-details-grid-element";

    let banner = document.createElement("a");
    banner.textContent = "Precipitation";
    this.container.appendChild(banner);

    let precipText = document.createElement("a");
    precipText.id = "wind-text";
    precipText.textContent =
      apiResponse.forecast.forecastday[0].day.totalprecip_mm + " mm";
    this.container.appendChild(precipText);
  }

  get domGrid() {
    return this.container;
  }
}

class WindIndicator {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "wind-indicator";
    this.container.className = "more-details-grid-element";

    let banner = document.createElement("a");
    banner.textContent = "Wind";
    this.container.appendChild(banner);

    let windText = document.createElement("a");
    windText.id = "wind-text";
    windText.textContent = apiResponse.current.wind_kph + " km/h";
    this.container.appendChild(windText);
  }

  get domGrid() {
    return this.container;
  }
}

class HumidityIndicator {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "humidity-indicator";
    this.container.className = "more-details-grid-element";

    let banner = document.createElement("a");
    banner.id = "humidity-banner";
    banner.textContent = "Humidity";
    let humidityIcon = document.createElement("img");
    humidityIcon.src = humiditySvg;
    humidityIcon.id = "humidity-svg-element";
    banner.appendChild(humidityIcon);
    this.container.appendChild(banner);

    let humidityText = document.createElement("a");
    humidityText.id = "humidity-text";
    humidityText.textContent = apiResponse.current.humidity + "%";
    this.container.appendChild(humidityText);

    this.setupIndicatorBar(apiResponse.current.humidity);
  }

  get domGrid() {
    return this.container;
  }

  setupIndicatorBar(humidity) {
    function drawLowBar(humidity, container) {
      let banner = document.createElement("a");
      banner.textContent = "Low";
      container.appendChild(banner);

      let fill = document.createElement("div");
      fill.className = "humidity-bar-fill";
      container.appendChild(fill);

      if (humidity > 30) {
        fill.style.width = "100%";
        return;
      }

      // bar scaling 0 - 30
      fill.style.width = `${(humidity * 100) / 30}%`;
    }

    function drawOptimalBar(humidity, container) {
      let banner = document.createElement("a");
      banner.textContent = "Optimal";
      container.appendChild(banner);

      let fill = document.createElement("div");
      fill.className = "humidity-bar-fill";
      container.appendChild(fill);

      if (humidity < 30) {
        fill.style.width = "0%";
        return;
      }

      if (humidity > 50) {
        fill.style.width = "100%";
        return;
      }

      // bar scaling 30 - 50
      fill.style.width = `${humidity - 30 * 5}%`;
    }

    function drawHighBar(humidity, container) {
      let banner = document.createElement("a");
      banner.textContent = "High";
      container.appendChild(banner);

      let fill = document.createElement("div");
      fill.className = "humidity-bar-fill";
      container.appendChild(fill);

      if (humidity < 50) {
        fill.style.width = "0%";
        return;
      }

      // bar scaling 50 - 100
      fill.style.width = `${(humidity - 50) * 2}%`;
    }

    let barSection = document.createElement("div");
    barSection.id = "indicator-bar";

    let lowColumn = document.createElement("div");
    lowColumn.className = "humidity-indicator-column";
    let conditionTextLow = document.createElement("a");
    conditionTextLow.textContent = "low";
    drawLowBar(humidity, lowColumn);
    barSection.appendChild(lowColumn);

    let optimalColumn = document.createElement("div");
    optimalColumn.className = "humidity-indicator-column";
    let conditionTextOptimal = document.createElement("a");
    conditionTextOptimal.textContent = "medium";
    drawOptimalBar(humidity, optimalColumn);
    barSection.appendChild(optimalColumn);

    let highColumn = document.createElement("div");
    highColumn.className = "humidity-indicator-column";
    let conditionTextHigh = document.createElement("a");
    conditionTextHigh.textContent = "high";
    barSection.appendChild(highColumn);
    drawHighBar(humidity, highColumn);
    this.container.appendChild(barSection);
  }
}

function setUpMoreDetailsGrid(apiResponse) {
  let container = document.createElement("div");
  container.id = "more-details-grid";

  let humidityIndicator = new HumidityIndicator(apiResponse);
  let windIndicator = new WindIndicator(apiResponse);
  let precipIndicator = new PrecipIndicator(apiResponse);
  let uvIndicator = new UVIndicator(apiResponse);
  let feelsLikeIndicator = new FeelsLikeIndicator(apiResponse);
  let chanceOfRainIndicator = new ChanceOfRainIndicator(apiResponse);
  container.appendChild(humidityIndicator.domGrid);
  container.appendChild(windIndicator.domGrid);
  container.appendChild(precipIndicator.domGrid);
  container.appendChild(uvIndicator.domGrid);
  container.appendChild(feelsLikeIndicator.domGrid);
  container.appendChild(chanceOfRainIndicator.domGrid);

  return container;
}

async function setUpDetailCard(infoGrid, apiResponse) {
  let detailCard = document.createElement("div");
  detailCard.id = "detail-card";
  detailCard.appendChild(setUpWelcomeBanner());

  let upcomingHours = new UpcomingHoursChart(apiResponse);
  detailCard.appendChild(upcomingHours.upcomingHoursContainer);

  infoGrid.appendChild(detailCard);
  upcomingHours.drawChart();

  detailCard.appendChild(setUpMoreDetailsBanner());

  detailCard.appendChild(setUpMoreDetailsGrid(apiResponse));
}

async function getApiData(locationId) {
  let apiURL = `https://api.weatherapi.com/v1/forecast.json?key=a5e4fed568014feea07121139242401&q=id:${locationId}&days=3&aqi=no&alerts=no`;
  return await fetch(apiURL, { mode: "cors" }).then((response) =>
    response.json()
  );
}

function getCurrentTemerature(locationId) {
  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=a5e4fed568014feea07121139242401&q=id:${locationId}&aqi=no`;

  fetch(apiUrl, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(`Current temperature: ${response.current.temp_c}`);
    })
    .catch(function (err) {
      // Error handling
    });
}

function updateWeatherPage(
  daynr,
  apiResponse,
  topRow,
  cityRow,
  tempRow,
  descRow
) {
  topRow.daySwitchMarker.switchDay(daynr);
  cityRow.changeDate(daynr, apiResponse);
  cityRow.updateSunRiseHour(daynr, apiResponse);
  cityRow.updateSunSetHour(daynr, apiResponse);
  tempRow.updateTemp(daynr, apiResponse);
  descRow.updateDescription(daynr, apiResponse);
}

async function setUpWeatherPage(locationId) {
  const apiResponse = await getApiData(locationId);

  // container home page clean up
  let container = document.querySelector("#container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let infoGrid = document.createElement("div");
  infoGrid.id = "info-grid";
  container.appendChild(infoGrid);

  let { topRow, cityRow, tempRow, descRow } = await setUpNowCard(
    infoGrid,
    apiResponse
  );
  setUpDetailCard(infoGrid, apiResponse);

  let daynr = 0;
  let leftDaySwitch = document.querySelector("#temp-row-button-left");
  let rightDaySwitch = document.querySelector("#temp-row-button-right");

  leftDaySwitch.addEventListener("click", () => {
    if (daynr > 0) {
      daynr -= 1;
      updateWeatherPage(daynr, apiResponse, topRow, cityRow, tempRow, descRow);
    } else {
      return;
    }
  });

  rightDaySwitch.addEventListener("click", () => {
    if (daynr < 2) {
      daynr += 1;
      updateWeatherPage(daynr, apiResponse, topRow, cityRow, tempRow, descRow);
    } else {
      return;
    }
  });
}

export { setUpWeatherPage };
