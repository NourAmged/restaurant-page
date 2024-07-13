import './style.css';

import { createHomePage } from './home.js';
import { createContactPage } from './contact.js';
import { createMenuPage } from './menu.js';


function clearContent() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function loadPage(pageFunction) {
    clearContent();
    pageFunction();
}

document.getElementById('home').addEventListener('click', () => loadPage(createHomePage));
document.getElementById('contact').addEventListener('click', () => loadPage(createContactPage));
document.getElementById('menu').addEventListener('click', () => loadPage(createMenuPage));

document.addEventListener('DOMContentLoaded', () => loadPage(createHomePage));