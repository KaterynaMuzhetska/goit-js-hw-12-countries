  
import templateMenuCard from './templates/menu-template.hbs';
import dataMenuCard from './js/menu.json';
import { randerPage } from './js/script-rander-page.js';
import { changeThemsByClickAndRelodePage } from './js/script-change-thema.js';
import './sass/main.scss';

randerPage(dataMenuCard, templateMenuCard);
changeThemsByClickAndRelodePage();