import "./style.css";
import searchIconImg from "./graphics/search-alt-1-svgrepo-com.svg";

async function fillSearchHints(searchArea, userInput) {
  let apiSearchURLBase = `http://api.weatherapi.com/v1/search.json?key=a5e4fed568014feea07121139242401&q=${userInput}`;

  const cityList = await fetch(apiSearchURLBase, { mode: "cors" }).then(
    (response) => response.json()
  );

  for (let index = 0; index < cityList.length; index++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = `${cityList[index].name}, ${cityList[index].country}`;
    searchArea.appendChild(paragraph);
  }
}

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

searchBar.addEventListener("click", () => {
  searchInputArea.textContent = "siema";
  searchInputArea.focus();
});

let timeoutSwitch = true;
let timeoutId = "";

searchInputArea.addEventListener("keydown", (event) => {
  if (event.ctrlKey === true) {
    return;
  }

  if (event.key === "Enter") {
    // Submit search result
  }

  if (timeoutSwitch === false) {
    clearTimeout(timeoutId);
  }

  timeoutSwitch = false;

  timeoutId = setTimeout(() => {
    timeoutSwitch = true;
    while (searchResultSection.firstChild) {
      searchResultSection.removeChild(searchResultSection.firstChild);
    }
    if (searchInputArea.value != "") {
      //API request
      fillSearchHints(searchResultSection, searchInputArea.value);
      //
    }
  }, 500);
});
