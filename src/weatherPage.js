import { createHomeTitle } from "./homePage";
import backIconSvg from "./graphics/back-svgrepo-com.svg";

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

function setupBackButton() {
  let backButtonArea = document.createElement("div");
  backButtonArea.id = "back-button-area";

  let backButton = document.createElement("img");
  backButton.src = backIconSvg;
  backButton.id = "back-button";
  backButton.alt = "back";
  backButtonArea.appendChild(backButton);

  return backButtonArea;
}

function setupDaySwitchMarker(currentDay) {
  let switchContainer = document.createElement("div");
  switchContainer.id = "switch-container";

  let currentPositionElement = document.createElement("div");
  currentPositionElement.id = "current-position-element";
  currentPositionElement.className = "switch-element";
  switchContainer.appendChild(currentPositionElement);

  switch (currentDay) {
    case 0:
      currentPositionElement.style.order = 0;
      break;
    case 1:
      currentPositionElement.style.order = 2;
      break;
    case 2:
      currentPositionElement.style.order = 4;
      break;
    case 3:
      currentPositionElement.style.order = 6;
      break;
  }

  let backgroundPositionElement1 = document.createElement("div");
  backgroundPositionElement1.style.order = "1";
  backgroundPositionElement1.className =
    "switch-background-element switch-element";
  switchContainer.appendChild(backgroundPositionElement1);
  let backgroundPositionElement2 = document.createElement("div");
  backgroundPositionElement2.style.order = "3";
  backgroundPositionElement2.className =
    "switch-background-element switch-element";
  switchContainer.appendChild(backgroundPositionElement2);
  let backgroundPositionElement3 = document.createElement("div");
  backgroundPositionElement3.style.order = "5";
  backgroundPositionElement3.className =
    "switch-background-element switch-element";
  switchContainer.appendChild(backgroundPositionElement3);

  return switchContainer;
}

function setupTopNowCardGrid(container) {
  let topNowCardGrid = document.createElement("div");
  topNowCardGrid.id = "top-now-card-grid";
  topNowCardGrid.style.gridTemplateColumns = "1fr 1fr 1fr";
  topNowCardGrid.style.direction = "row";

  let backbutton = setupBackButton();
  let switchMarker = setupDaySwitchMarker(0);
  let tempSwitchGrid = setUpTempSwitch("celcius");
  topNowCardGrid.appendChild(backbutton);
  topNowCardGrid.appendChild(switchMarker);
  topNowCardGrid.appendChild(tempSwitchGrid);

  container.appendChild(topNowCardGrid);
}

function setUpTempSwitch(unit) {
  let tempSwitchGrid = document.createElement("div");
  tempSwitchGrid.id = "temp-switch-grid";

  let celsiusText = document.createElement("div");
  celsiusText.textContent = "°C";
  celsiusText.className = "temp-switch-unit-text";
  tempSwitchGrid.appendChild(celsiusText);

  let currentTempCircle = document.createElement("div");
  currentTempCircle.id = "temp-switch-circle";
  tempSwitchGrid.appendChild(currentTempCircle);

  let backgroundBar = document.createElement("div");
  backgroundBar.id = "temp-switch-background-bar";
  tempSwitchGrid.appendChild(backgroundBar);

  let farenheitText = document.createElement("div");
  farenheitText.textContent = "°F";
  farenheitText.className = "temp-switch-unit-text";
  tempSwitchGrid.appendChild(farenheitText);

  switch (unit) {
    case "celcius":
      currentTempCircle.style.gridColumn = "2";
      break;
    case "farenheit":
      currentTempCircle.style.gridColumn = "3";
  }

  return tempSwitchGrid;
}

function setUpNowCard(container) {
  let nowCard = document.createElement("div");
  nowCard.style.gridTemplateRows = "1fr 1fr 1fr 5fr";
  nowCard.id = "now-card";

  setupTopNowCardGrid(nowCard);

  container.appendChild(nowCard);
}

function setUpDetailCard(container) {
  let detailCard = document.createElement("div");
  detailCard.id = "detail-card";
  detailCard.textContent = "detailCard";
  container.appendChild(detailCard);
}

function setUpWeatherPage(locationId) {
  let container = document.querySelector("#container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let infoGrid = document.createElement("div");
  infoGrid.id = "info-grid";
  container.appendChild(infoGrid);

  setUpNowCard(infoGrid);
  setUpDetailCard(infoGrid);
}

export { setUpWeatherPage };
