import "./style.css";

let container = document.querySelector("#container");
let heading = document.createElement("h1");
heading.textContent = "Pug Weather";
container.appendChild(heading);

let searchBar = document.createElement("div");
searchBar.id = "search-bar";
container.appendChild(searchBar);

let searchbutton = document.createElement("button");
searchbutton.className = "gg-search";
searchbutton.style.marginLeft = "18px";
searchBar.appendChild(searchbutton);

let apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=***REMOVED***&q=wroclaw&aqi=no";

fetch(apiUrl, { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(`Current temperature: ${response.current.temp_c}`);
  })
  .catch(function (err) {
    // Error :(
  });
