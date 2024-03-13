import { createHomeTitle } from "./homePage";
import backIconSvg from "./graphics/back-svgrepo-com.svg";

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
    this.backgroundPositionElement3 = document.createElement("div");
    this.backgroundPositionElement3.style.order = "5";
    this.backgroundPositionElement3.className =
      "switch-background-element switch-element";
    this.switchContainer.appendChild(this.backgroundPositionElement3);
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

    const currentDay = new Date(apiResponse.location.localtime).getDate();
    const currentMnth =
      monthAbbr[new Date(apiResponse.location.localtime).getMonth()];

    this.container = document.createElement("div");
    this.container.id = "city-row-grid";

    this.location = document.createElement("div");
    this.location.className = "city-row-elements";
    this.location.id = "city-row-location";
    this.location.textContent = "n/n";
    this.updateLocation(
      apiResponse.location.name,
      apiResponse.location.country
    );

    this.sunRise = document.createElement("div");
    this.sunRise.textContent = "srtest";

    this.sunSet = document.createElement("div");
    this.sunSet.textContent = "sstest";

    this.date = document.createElement("div");
    this.date.textContent = "Today n/n";
    this.updateDate(0, currentDay, currentMnth);

    this.container.appendChild(this.location);
    this.container.appendChild(this.sunRise);
    this.container.appendChild(this.date);
    this.container.appendChild(this.sunSet);
  }

  get domGrid() {
    return this.container;
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

  updateDate(daynr, apiDay, mnth) {
    switch (daynr) {
      case 0:
        this.date.textContent = `Today ${apiDay} ${mnth}`;
        break;
      case 1:
        this.date.textContent = `Tommorow ${apiDay} ${mnth}`;
        break;
      case 2 || 3:
        this.date.textContent = `${apiDay} ${mnth}`;
        break;
    }
  }
}

function getCurrentTemerature(locationId) {
  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=***REMOVED***&q=id:${locationId}&aqi=no`;

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

function setUpNowCard(container, apiResponse) {
  let nowCard = document.createElement("div");
  nowCard.style.gridTemplateRows = "1fr 1fr 1fr 5fr";
  nowCard.id = "now-card";

  let topRow = new TopNowCardRow();
  let cityRow = new CityRow(apiResponse);
  nowCard.appendChild(topRow.domGrid);
  nowCard.appendChild(cityRow.domGrid);
  container.appendChild(nowCard);

  return { nowCard, topRow, cityRow };
}

function setUpDetailCard(container, apiResponse) {
  let detailCard = document.createElement("div");
  detailCard.id = "detail-card";
  detailCard.textContent = "detailCard";
  container.appendChild(detailCard);

  return { detailCard };
}

async function getApiData(locationId) {
  let apiURL = `http://api.weatherapi.com/v1/current.json?key=***REMOVED***&q=id:${locationId}&aqi=no`;
  return await fetch(apiURL, { mode: "cors" }).then((response) =>
    response.json()
  );
}

async function setUpWeatherPage(locationId) {
  // some animation should be played during fetching in case of API long response

  const apiResponse = await getApiData(locationId);
  console.log(apiResponse);

  let container = document.querySelector("#container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let infoGrid = document.createElement("div");
  infoGrid.id = "info-grid";
  container.appendChild(infoGrid);

  let { nowCard, topRow, cityRow } = setUpNowCard(infoGrid, apiResponse); //if not in use nowCard object import to be removed
  let { detailCard } = setUpDetailCard(infoGrid, apiResponse); //if not in use detailCard object import to be removed
}

export { setUpWeatherPage };
