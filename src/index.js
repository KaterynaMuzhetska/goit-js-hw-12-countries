import countries from './fetchCountries';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import template from './templates/countryTemplate.hbs';
import countriesListTemplate from './templates/countriesListTemplate.hbs';
var debounce = require('lodash.debounce');



const cardContainer = document.querySelector('.js-card-container');

const input = document.querySelector('input');

input.addEventListener('input', debounce(searchCounntries, 500));

function searchCounntries(e) {
    countries(e.target.value).then(countries => {
        const countriesLength = countries.length;
        if (countriesLength === 1) {
            cardContainer.innerHTML = template(countries[0]);
            return;
        } else if (countriesLength <= 10) {
            cardContainer.innerHTML = countriesListTemplate(countries);
            return;
        }
        else {
            onFetchError();
        }
     }).catch(error => {
        console.log(error);
    });
}



function onFetchError() {
    error({
      text: 'Too many matches found. Please enter a more spesific query!',
      delay: '2000',
      maxTextHeight: null,
    });
  }
