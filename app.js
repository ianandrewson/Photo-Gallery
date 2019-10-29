import { renderDragon } from './util/renderDragon.js';
import htmlToDOM from './util/html-to-DOM.js';
import images from './data/images.js';

const displayArea = document.getElementById('display-area');

images.forEach(element => {
    let elementHtml = renderDragon(element);
    let dom = htmlToDOM(elementHtml);
    displayArea.appendChild(dom);
});