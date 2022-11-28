import allCountries from "./data.js";
console.log(allCountries);

// localStorage.clear();

//pasizymiu vieta i kura kjs pagalba printinsiu elementus
const my_main_div = document.getElementById("main_div");

allCountries.map((country, index) => {
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
  one_country_info.appendChild(my_country_name);

  const my_country_capital = document.createElement("p");
  if (Array.isArray(country.capital)) {
    console.log(country.capital[0]);
    my_country_capital.innerText = country.capital[0];
  } else {
    my_country_capital.innerText = "info nerasta...";
  }
  one_country_info.appendChild(my_country_capital);

  my_main_div.appendChild(one_country_info);
  one_country_info.appendChild(my_img);
});
