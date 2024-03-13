import { createHomeTitle } from "./homePage";
import backIconSvg from "./graphics/back-svgrepo-com.svg";
import leftIconSvg from "./graphics/left-svgrepo-com.svg";
import rightIconSvg from "./graphics/right-svgrepo-com.svg";

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

  switchDay(currentDay) {
    switch (currentDay) {
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
  }

  get domGroup() {
    return this.backButtonArea;
  }
}

class CityRow {
  constructor(apiResponse) {
    this.container = document.createElement("div");
    this.container.id = "city-row-grid";

    this.location = document.createElement("div");
    this.location.className = "city-row-elements";
    this.location.id = "city-row-location";
    this.updateLocation(
      apiResponse.location.name,
      apiResponse.location.country
    );

    this.sunRise = document.createElement("div");
    this.sunRise.className = "city-row-elements";
    this.sunRise.textContent = "srtest";

    this.sunSet = document.createElement("div");
    this.sunSet.className = "city-row-elements";
    this.sunSet.textContent = "sstest";

    this.date = document.createElement("div");
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
    this.location.textContent = city + ", " + country;
  }

  updateSunRise(time) {
    this.sunRise.textContent = time;
  }

  updateSunSet(time) {
    this.sunSet.textContent = time;
  }
}

class TemperatureRow {
  constructor(apiResponse) {
    let startingTemp = apiResponse.current.temp_c;

    this.tempRow = document.createElement("div");
    this.tempRow.id = "temp-row";

    this.currentTemp = document.createElement("div");
    this.currentTemp.id = "current-temp";
    this.currentTemp.textContent = startingTemp + "°";

    this.leftArrow = document.createElement("img");
    this.leftArrow.src = leftIconSvg;
    this.leftArrow.className = "temp-row-arrow";
    this.leftArrow.id = "temp-row-arrow-left";

    this.rightArrow = document.createElement("img");
    this.rightArrow.src = rightIconSvg;
    this.rightArrow.className = "temp-row-arrow";
    this.rightArrow.id = "temp-row-arrow-right";

    this.tempRow.appendChild(this.leftArrow);
    this.tempRow.appendChild(this.currentTemp);
    this.tempRow.appendChild(this.rightArrow);
  }

  updateTemp(daynr, apiResponse) {
    if (daynr === 0) {
      this.currentTemp.textContent = apiResponse.current.temp_c + "°";
    } else {
      this.currentTemp.textContent =
        Math.round(apiResponse.forecast.forecastday[daynr].day.maxtemp_c) + "°";
    }
  }

  get domFlex() {
    return this.tempRow;
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

class WeatherDescriptionRow {
  constructor(apiResponse) {
    this.weatherDesriptionRow = document.createElement("div");
    this.weatherDesriptionRow.id = "weather-description-row";
    this.weatherDesriptionRow.textContent = apiResponse.current.condition.text;
  }

  updateDescription(daynr, apiResponse) {
    if (daynr === 0) {
      this.weatherDesriptionRow.textContent =
        apiResponse.current.condition.text;
    } else {
      this.weatherDesriptionRow.textContent =
        apiResponse.forecast.forecastday[daynr].day.condition.text;
    }
  }
}

function setUpNowCard(container, apiResponse) {
  let nowCard = document.createElement("div");
  nowCard.style.gridTemplateRows = "1fr 1fr 1fr 5fr";
  nowCard.id = "now-card";

  let topRow = new TopNowCardRow();
  let cityRow = new CityRow(apiResponse);
  let tempRow = new TemperatureRow(apiResponse);
  let descRow = new WeatherDescriptionRow(apiResponse);

  nowCard.appendChild(topRow.domGrid);
  nowCard.appendChild(cityRow.domGrid);
  nowCard.appendChild(tempRow.domFlex);
  nowCard.appendChild(descRow.weatherDesriptionRow);
  container.appendChild(nowCard);

  return { topRow, cityRow, tempRow, descRow };
}

function setUpDetailCard(container, apiResponse) {
  let detailCard = document.createElement("div");
  detailCard.id = "detail-card";
  detailCard.textContent = "detailCard";
  container.appendChild(detailCard);

  return { detailCard };
}

async function getApiData(locationId) {
  let apiURL = `http://api.weatherapi.com/v1/forecast.json?key=a5e4fed568014feea07121139242401&q=id:${locationId}&days=3&aqi=no&alerts=no`;
  return await fetch(apiURL, { mode: "cors" }).then((response) =>
    response.json()
  );
}

function getCurrentTemerature(locationId) {
  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=a5e4fed568014feea07121139242401&q=id:${locationId}&aqi=no`;

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

function updateWeatherPage(daynr, apiResponse, cityRow, tempRow, descRow) {
  cityRow.changeDate(daynr, apiResponse);
  tempRow.updateTemp(daynr, apiResponse);
  descRow.updateDescription(daynr, apiResponse);
}

async function setUpWeatherPage(locationId) {
  const apiResponse = await getApiData(locationId);

  let container = document.querySelector("#container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let infoGrid = document.createElement("div");
  infoGrid.id = "info-grid";
  container.appendChild(infoGrid);

  let { topRow, cityRow, tempRow, descRow } = setUpNowCard(
    infoGrid,
    apiResponse
  );
  setUpDetailCard(infoGrid, apiResponse);

  let daynr = 0;
  let leftDaySwitch = document.querySelector("#temp-row-arrow-left");
  let rightDaySwitch = document.querySelector("#temp-row-arrow-right");

  leftDaySwitch.addEventListener("click", () => {
    if (daynr > 0) {
      daynr -= 1;
      updateWeatherPage(daynr, apiResponse, cityRow, tempRow, descRow);
    } else {
      return;
    }
  });

  rightDaySwitch.addEventListener("click", () => {
    if (daynr < 2) {
      daynr += 1;
      updateWeatherPage(daynr, apiResponse, cityRow, tempRow, descRow);
    } else {
      return;
    }
  });
}

export { setUpWeatherPage };
