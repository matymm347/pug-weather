import { createHomeTitle } from "./homePage";

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

function setUpWeatherPage(locationId) {
  let container = document.querySelector("#container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createHomeTitle(container);

  //Testing
  let testdiv = document.createElement("div");
  testdiv.textContent = locationId;
  container.appendChild(testdiv);
  //
}

export { setUpWeatherPage };
