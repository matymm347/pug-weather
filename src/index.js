import "./style.css";
import searchIconImg from "./graphics/search-alt-1-svgrepo-com.svg";

function getCurrentTemerature(location) {
  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=a5e4fed568014feea07121139242401&q=${location}&aqi=no`;

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
}

let container = document.querySelector("#container");
let heading = document.createElement("h1");
heading.textContent = "Pug Weather";
heading.style.color = "#5751CC";
container.appendChild(heading);

let searchArea = document.createElement("div");
searchArea.id = "search-area";
container.appendChild(searchArea);

let searchBar = document.createElement("div");
searchBar.id = "search-bar";
searchArea.appendChild(searchBar);

let searchInputArea = document.createElement("input");
searchInputArea.id = "search-input-area";
searchInputArea.placeholder = "Search Location";
searchBar.appendChild(searchInputArea);

let searchIconArea = document.createElement("div");
searchIconArea.id = "search-icon-area";
searchBar.appendChild(searchIconArea);

let searchIcon = document.createElement("img");
searchIcon.src = searchIconImg;
searchIcon.alt = "search icon";
searchIcon.id = "search-icon";
searchIcon.style.marginLeft = "18px";
searchIconArea.appendChild(searchIcon);

let searchResultSection = document.createElement("div");
searchResultSection.id = "search-result-section";
searchArea.appendChild(searchResultSection);

let textElements = [
  "This is the first text element",
  "This is the second text element",
  "This is the third text element",
];

for (let index = 0; index < textElements.length; index++) {
  let paragraph = document.createElement("p");
  paragraph.textContent = textElements[index];
  searchResultSection.appendChild(paragraph);
}

searchBar.addEventListener("click", () => {
  searchInputArea.textContent = "siema";
});

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
}

async function example() {
  console.log("Start");
  const result = await fetchData();
  console.log(result);
  console.log("End");
}

example();
