import searchIconImg from "./graphics/search-alt-1-svgrepo-com.svg";
import { setUpWeatherPage } from "./weatherPage";

async function fillSearchHints(searchArea, userInput) {
  userInput = replacePolishChars(userInput);
  let apiSearchURLBase = `http://api.weatherapi.com/v1/search.json?key=a5e4fed568014feea07121139242401&q=${userInput}&lang=pl`;

  const cityList = await fetch(apiSearchURLBase, { mode: "cors" }).then(
    (response) => response.json()
  );

  if (Object.keys(cityList).length === 0) {
    let paragraph = document.createElement("p");
    paragraph.textContent = "No matches found";
    searchArea.appendChild(paragraph);
  } else {
    for (let index = 0; index < cityList.length; index++) {
      let button = createSearchHintButton(searchArea);
      button.textContent = `${cityList[index].name}, ${cityList[index].country}`;
      button.dataset.value = cityList[index].id;
    }
  }
}

function createSearchHintButton(searchArea) {
  let button = document.createElement("button");
  searchArea.appendChild(button);
  button.addEventListener("click", () => {
    setUpWeatherPage(button.dataset.value);
  });
  return button;
}

function replacePolishChars(inputString) {
  const polishLettersMapping = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ź: "Z",
    Ż: "Z",
  };

  // Replace Polish letters with their non-diacritic equivalents
  let resultString = "";
  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString.charAt(i);
    resultString += polishLettersMapping[currentChar] || currentChar;
  }

  return resultString;
}

function createHomeTitle(container) {
  let homeTitle = document.createElement("h1");
  homeTitle.textContent = "Pug Weather";
  homeTitle.style.color = "#5751CC";
  container.appendChild(homeTitle);

  return homeTitle;
}

function userInputSearchHandler(searchInputArea, searchResultSection) {
  let timeoutSwitch = true;
  let timeoutId = "";

  searchInputArea.addEventListener("keydown", (event) => {
    if (event.ctrlKey === true) {
      return;
    }

    if (event.key === "ArrowUp") {
      return;
    } else if (event.key === "ArrowDown") {
      return;
    } else if (event.key === "ArrowLeft") {
      return;
    } else if (event.key === "ArrowRight") {
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
        fillSearchHints(searchResultSection, searchInputArea.value);
      }
    }, 200);
  });
}

function setUpSearchArea(container) {
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

  searchBar.addEventListener("click", () => {
    searchInputArea.focus();
  });

  userInputSearchHandler(searchInputArea, searchResultSection);
}

function setUpHomePage() {
  let container = document.querySelector("#container");
  let homeTitle = createHomeTitle(container);
  let searchArea = setUpSearchArea(container);
}

export { setUpHomePage, createHomeTitle };
