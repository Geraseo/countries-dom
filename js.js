import allCountries from "./data.js";
console.log(allCountries);

// header mygtukai
const continent_buttons = document.querySelector("header");

//  meniu punktai filtravimui
const continents = ["all"];

//pasizymiu vieta i kura kjs pagalba printinsiu elementus
const my_main_div = document.getElementById("main_div");

allCountries.map((country, index) => {
  //1. atrinkti unikalius continentus
  if (!continents.includes(country.continents[0])) {
    continents.push(country.continents[0]);
  }

  //______________
  console.log(index + 1);
  console.log(country.name.common);

  const one_country_info = document.createElement("div");

  //kuriu elemnta i kuri irasysiu salies pavadinima
  const my_country_name = document.createElement("h3");
  const my_img = document.createElement("img");
  my_img.src = country.flags.png;

  //idedu teksta , reiksme, kintmaji i sukurta elementa
  my_country_name.innerText = country.name.common;

  //idedu i main div'a savo sukurta elemnta su contentu

  //capital ___________________
  const my_country_capital = document.createElement("p");
  if (Array.isArray(country.capital)) {
    console.log(country.capital[0]);
    my_country_capital.innerText = country.capital[0];
  } else {
    my_country_capital.innerText = "info nerasta...";
  }

  //_______________ continent idejimas

  const my_country_continent = document.createElement("p");
  my_country_continent.setAttribute("class", "continentas");

  if (Array.isArray(country.continents)) {
    console.log(country.continents[0]);
    my_country_continent.innerText = country.continents[0];
  } else {
    my_country_continent.innerText = "info nerasta...";
  }
  switch (country.continents[0]) {
    case "Europe":
      my_country_continent.style.backgroundColor = "lightblue";
      break;
    case "Africa":
      my_country_continent.style.backgroundColor = "lightyellow";
      break;
    case "Asia":
      my_country_continent.style.backgroundColor = "lightgreen";
      break;
    case "Oceania":
      my_country_continent.style.backgroundColor = "teal";
      break;
    case "South America":
      my_country_continent.style.backgroundColor = "orange";
      break;
    case "Antarctica":
      my_country_continent.style.backgroundColor = "pink";
      break;
    case "North America":
      my_country_continent.style.backgroundColor = "yellow";
      break;
  }

  //_____ languages
  const my_country_langs = document.createElement("p");

  JSON.stringify(country.languages);

  for (let key in country.languages) {
    console.log(country.languages[key]);
    my_country_langs.innerText = country.languages[key];
  }

  //_____
  my_main_div.appendChild(one_country_info);
  one_country_info.appendChild(my_country_continent);
  one_country_info.appendChild(my_country_name);
  one_country_info.appendChild(my_img);
  one_country_info.appendChild(my_country_capital);
  one_country_info.appendChild(my_country_langs);
});

console.log(continents);

continents.forEach((continent) => {
  const my_button = document.createElement("button");
  my_button.innerText = continent;
  continent_buttons.appendChild(my_button);
});

const card_continent = document.querySelectorAll(".continentas");
const my_buttons = document.getElementsByTagName("button");
console.log(my_buttons);

//visiems mygtukams uzdeti event
for (let one_category of my_buttons) {
  console.log("paspaustas myugtukas");
  one_category.addEventListener("click", () => {
    getCountries(one_category.innerText);
  });
}

const getCountries = (continent) => {
  for (let continent_from_div of card_continent) {
    // console.log(i.innerText);
    // jei mygtuko info kontinentas yra lygus i.innertext rodykl korteles
    // continent yra tekstas is paspausto mygtuko
    // i.inner tekstas uyra tekstas is divu kur spausdiname kontinentus kamputy
    if (continent_from_div.innerText === continent || continent === "all") {
      continent_from_div.parentElement.style.display = "block";
    } else {
      continent_from_div.parentElement.style.display = "none";
    }
  }
};
